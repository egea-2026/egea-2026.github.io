import { test, expect } from "@playwright/test";

for (const [path, heading] of [
  ["index.html", "Enumerative"],
  ["about.html", "About"],
  ["program.html", "Program"],
  ["speakers.html", "Speakers"],
  ["information.html", "Information"],
]) {
  test(`${path} renders without broken resources or horizontal overflow`, async ({
    page,
  }) => {
    const failures = [];
    page.on("pageerror", (error) => failures.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400)
        failures.push(`${response.status()}: ${response.url()}`);
    });
    await page.goto(`/${path}`);
    await expect(page.locator("h1")).toContainText(heading);
    await page.evaluate(() => document.fonts.ready);
    await expect
      .poll(() =>
        page.evaluate(() =>
          [...document.images].every(
            (image) => image.complete && image.naturalWidth > 0,
          ),
        ),
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(failures).toEqual([]);
  });
}

test("navigation keeps the document, fonts, and header while updating each page", async ({
  page,
  isMobile,
}) => {
  const documents = [];
  const fonts = [];
  page.on("request", (request) => {
    if (
      request.resourceType() === "document" &&
      request.frame() === page.mainFrame()
    )
      documents.push(request.url());
    if (request.resourceType() === "font") fonts.push(request.url());
  });
  await page.goto("/index.html");
  await page.evaluate(() => {
    window.navigationIdentity = {
      header: document.querySelector("header"),
      fonts: document.fonts,
    };
  });
  for (const name of [
    "About",
    "Program",
    "Speakers",
    "Information",
    "Home",
    "Program",
    "About",
  ]) {
    if (isMobile)
      await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name, exact: true })
      .click();
    await expect(
      page
        .getByRole("navigation", {
          name: "Main navigation",
          includeHidden: true,
        })
        .getByRole("link", { name, exact: true, includeHidden: true }),
    ).toHaveAttribute("aria-current", "page");
    await expect(page.locator("h1")).toContainText(
      name === "Home" ? "Enumerative" : name,
    );
    await expect(page).toHaveTitle(
      name === "Home" ? /Enumerative Geometry/ : `${name} · EGEA 2026`,
    );
    await expect(page.locator("main")).toBeFocused();
    expect(
      await page.evaluate(
        () =>
          window.navigationIdentity?.header ===
            document.querySelector("header") &&
          window.navigationIdentity?.fonts === document.fonts,
      ),
    ).toBe(true);
    if (name === "Program") {
      await expect(page.locator(".program-day")).toHaveCount(5);
      await expect(page.locator(".talk")).toHaveCount(18);
    }
    await page.evaluate(() => document.fonts.ready);
    if (isMobile)
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toBeVisible();
  }
  expect(documents).toHaveLength(1);
  expect(fonts.length).toBe(new Set(fonts).size);
});

test("about links reach the committees and footer dialogs restore focus", async ({
  page,
}) => {
  await page.goto("/index.html");
  await page
    .getByRole("navigation", { name: "Explore the conference" })
    .getByRole("link", { name: /^About/ })
    .click();
  await expect(page).toHaveURL(/about\.html$/);
  await expect(
    page.getByRole("heading", { name: "Organizing Committee Members" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Scientific Committee Members" }),
  ).toBeVisible();
  await page.goto("/index.html");
  await page.getByRole("link", { name: "Learn more" }).click();
  await expect(
    page.getByRole("heading", { name: "About", exact: true }),
  ).toBeVisible();
  const privacy = page.getByRole("button", { name: "Privacy", exact: true });
  await privacy.click();
  await expect(page.getByRole("dialog")).toContainText(
    "does not use analytics",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(privacy).toBeFocused();
  await privacy.click();
  await page.getByRole("button", { name: "Close dialog" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.getByRole("button", { name: "Acknowledgements" }).click();
  await expect(page.getByRole("dialog")).toContainText(
    "The conference is supported by the Glorious Sun Charity Fund, the Hong Kong Mathematical Society (HKMS), the School of Science and the Department of Mathematics (HKUST).",
  );
  await page.getByRole("button", { name: "Close dialog" }).click();
});

test("timetable follows the spreadsheet, including the free afternoon and dinner", async ({
  page,
}) => {
  await page.goto("/program.html");
  const rows = page.locator(".week-table tbody tr");
  const expectedRows = [
    [
      "Qizheng Yin",
      "Zhengyu Zong",
      "Junliang Shen",
      "Chenjing Bu",
      "Chunyi Li",
    ],
    [
      "Adeel Khan",
      "Lucien Hennecart",
      "Alexandre Minets",
      "Christopher Brav",
      "Tasuki Kinjo",
    ],
    [
      "Tudor Padurariu",
      "Hyeonjun Park",
      "Free afternoon",
      "Andres Ibanez Nunez",
      "Woonam Lim",
    ],
    ["Yang Zhou", "Junwu Tu", "Yukinobu Toda", "Francesco Sala"],
    ["Conference Dinner"],
  ];
  await expect(rows).toHaveCount(5);
  await expect(rows.locator("th")).toHaveText([
    "10:00 – 11:00",
    "11:20 – 12:20",
    "14:30 – 15:30",
    "16:00 – 17:00",
    "Time TBA",
  ]);
  for (const [index, names] of expectedRows.entries()) {
    await expect(
      rows.nth(index).locator(".schedule-event > span:first-child"),
    ).toHaveText(names);
  }
  await expect(page.locator('.week-table td[rowspan="2"]')).toHaveText(
    "Free afternoon",
  );
  await expect(page.locator("#program-tuesday .program-event")).toHaveText(
    "Time TBAConference Dinner",
  );
  await expect(page.locator(".detailed-program")).not.toContainText(
    "Free afternoon",
  );
  for (const [index, day] of [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ].entries()) {
    await expect(page.locator(`#program-${day} .talk`)).toHaveCount(
      [4, 4, 2, 4, 4][index],
    );
  }
  await expect(page.locator("#monday-talk-0 .talk-title")).toHaveText("TBA");
  await page.locator("#monday-talk-0 > summary").click();
  await expect(page.locator("#monday-talk-0 .math-content")).toHaveText("TBA");
  await expect(page.locator(".schedule-room, .mobile-room")).toHaveCount(0);
});

test("schedule opens the correct talk and its containing day", async ({
  page,
  isMobile,
}) => {
  await page.goto("/program.html");
  await expect(page.locator(".program-day[open]")).toHaveCount(5);
  await expect(page.locator(".talk[open]")).toHaveCount(0);
  await page.getByRole("button", { name: "Collapse all days" }).click();
  await expect(page.locator(".program-day[open]")).toHaveCount(0);
  await page.getByRole("button", { name: "Expand all days" }).click();
  await expect(page.locator(".program-day[open]")).toHaveCount(5);
  await expect(page.locator(".talk[open]")).toHaveCount(0);
  await page.locator("#program-wednesday > summary").click();
  await expect(page.locator(".program-day[open]")).toHaveCount(4);
  await page.getByRole("button", { name: "Collapse all days" }).click();
  if (isMobile) {
    await page.getByRole("tab", { name: "Wed Dec 9" }).click();
    await expect(page.getByRole("tabpanel")).toContainText("Alexandre Minets");
    await page
      .getByRole("tabpanel")
      .getByRole("button", {
        name: /Equivariant multiplicities.*View abstract/,
      })
      .click();
  } else {
    await page
      .getByRole("table")
      .getByRole("button", {
        name: /Equivariant multiplicities.*View abstract/,
      })
      .click();
  }
  await expect(page.locator("#wednesday-talk-1")).toHaveAttribute("open", "");
  await expect(page.locator("#wednesday-talk-1 .talk-body")).toBeVisible();
  await page.getByRole("button", { name: "Collapse all days" }).click();
  await expect(page.locator("#wednesday-talk-1 .talk-body")).toBeHidden();
  await page.getByRole("button", { name: "Expand all days" }).click();
  await expect(page.locator("#wednesday-talk-1 .talk-body")).toBeVisible();
  await page.locator("#wednesday-talk-1 > summary").click();
  await expect(page.locator("#wednesday-talk-1 .talk-body")).toBeHidden();
});

test("mobile day tabs support keyboard navigation and the full week view", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "Mobile schedule only");
  await page.goto("/program.html");
  await page.getByRole("tab", { name: "Mon Dec 7" }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Tue Dec 8" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.getByRole("tabpanel")).toContainText("Conference Dinner");
  await expect(page.getByRole("tabpanel")).toContainText("Time TBA");
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tabpanel").locator(".mobile-slot")).toHaveCount(
    3,
  );
  await expect(page.getByRole("tabpanel")).toContainText("14:30 – 17:00");
  await expect(
    page.getByRole("tabpanel").getByText("Free afternoon", { exact: true }),
  ).toHaveCount(1);
  await page.keyboard.press("End");
  await expect(page.getByRole("tab", { name: "Fri Dec 11" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page.keyboard.press("Home");
  await expect(page.getByRole("tab", { name: "Mon Dec 7" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page
    .getByRole("combobox", { name: "Schedule display" })
    .selectOption("week");
  await expect(page.getByRole("table")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("campus PDFs are available and map links point to the intended destination", async ({
  page,
  request,
}) => {
  await page.goto("/information.html");
  const campus = page.getByRole("region", { name: "Getting to campus" });
  await expect(campus.getByRole("link")).toHaveCount(2);
  for (const title of ["Directions to HKUST", "Arrival Information"]) {
    const link = campus.getByRole("link", { name: `${title} (PDF)` });
    await expect(link).toBeVisible();
    const href = await link.getAttribute("href");
    const response = await request.get(new URL(href, page.url()).href);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("application/pdf");
    expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
  const campusMap = page.locator(
    'iframe[title="Interactive map of HKUST in Clear Water Bay, Hong Kong"]',
  );
  await expect(campusMap).toBeVisible();
  await expect(campusMap).toHaveAttribute(
    "src",
    /google\.com\/maps\/embed\?pb=/,
  );
  await expect(page.getByRole("link", { name: "View on Map" })).toHaveAttribute(
    "href",
    /Hong\+Kong\+University/,
  );
  await expect(page.locator(".destination-card")).toHaveCount(6);
});

test("abstract math uses local STIX2 fonts and survives schedule interactions", async ({
  page,
  isMobile,
}) => {
  const failures = [];
  const fontRequests = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(response.url());
    if (response.url().endsWith(".woff2")) fontRequests.push(response.url());
  });
  // MathJax and its dynamically loaded font data must work without a CDN.
  await page.route(/^https?:\/\/(?!127\.0\.0\.1:5173\/)/, (route) =>
    route.abort(),
  );
  await page.goto("/program.html");
  const talk = page.locator("#thursday-talk-2");
  await expect(page.locator('.talk [data-math-ready="true"]')).toHaveCount(18);
  await expect(talk.locator('[data-math-ready="true"]')).toHaveCount(1);
  await expect(talk.locator("mjx-container").first()).toBeHidden();
  const mathCount = await talk.locator("mjx-container").count();
  expect(mathCount).toBeGreaterThan(0);
  expect(await page.evaluate(() => MathJax.version)).toMatch(/^4\./);
  expect(await page.evaluate(() => MathJax.config.output.font)).toBe(
    "mathjax-stix2",
  );
  await page.evaluate(() => document.fonts.ready);
  expect(fontRequests.some((url) => url.includes("/stix2/chtml/woff2/"))).toBe(
    true,
  );

  if (isMobile) {
    for (const name of ["Thu Dec 10", "Tue Dec 8", "Wed Dec 9", "Thu Dec 10"]) {
      await page.getByRole("tab", { name }).click();
    }
    // Hidden mobile previews are remounted when the selected day changes.
    const button = page.getByRole("tabpanel").getByRole("button", {
      name: /The stacky cohomological.*View abstract/,
    });
    await expect(
      button.locator("..").locator(".event-preview mjx-container"),
    ).toHaveCount(mathCount);
    await button.click();
  } else {
    const button = page.getByRole("table").getByRole("button", {
      name: /The stacky cohomological.*View abstract/,
    });
    await button.hover();
    const preview = button.locator("..").locator(".event-preview");
    await expect(preview.locator("mjx-container")).toHaveCount(mathCount);
    await preview.hover();
    await preview.click();
  }
  await expect(talk.locator("summary")).toBeFocused();
  await expect(talk.locator("mjx-container").first()).toBeVisible();
  await expect(page.locator("mjx-merror")).toHaveCount(0);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(failures).toEqual([]);
});

test("history restores pages and scroll while quick links and new tabs work", async ({
  page,
  context,
}) => {
  await page.goto("/index.html");
  const learnMore = page.getByRole("link", { name: "Learn more" });
  await learnMore.scrollIntoViewIfNeeded();
  const originalScroll = await page.evaluate(() => scrollY);
  await learnMore.click();
  await expect(page).toHaveURL(/about\.html$/);
  await expect(page.locator("main")).toBeFocused();
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /organizing committee/,
  );
  await page.goBack();
  await expect(page.locator("h1")).toContainText("Enumerative");
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(originalScroll);
  await page.goForward();
  await expect(page.locator("h1")).toHaveText("About");
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await page.reload();
  await expect(page.locator("h1")).toHaveText("About");
  const brand = page
    .getByRole("link", { name: "EGEA 2026 home", exact: true })
    .first();
  await brand.evaluate((link) => link.setAttribute("target", "_blank"));
  const newTabPromise = context.waitForEvent("page");
  await brand.click();
  const newTab = await newTabPromise;
  await expect(newTab.locator("h1")).toContainText("Enumerative");
  await expect(page).toHaveURL(/about\.html$/);
  await newTab.close();
});
