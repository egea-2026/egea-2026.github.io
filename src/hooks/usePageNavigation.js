import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navigation, pageMetadata } from "../data/conference";

// Only intercept the conference's own HTML entries in this directory.
const directory = new URL("./", window.location.href);
const routes = new Map(
  navigation.map(({ href, id }) => [new URL(href, directory).pathname, id]),
);
routes.set(directory.pathname, "home");
routes.set(new URL("info.html", directory).pathname, "information");
const currentPage = () => routes.get(window.location.pathname) || "home";
export default function usePageNavigation() {
  const [route, setRoute] = useState(() => ({
    page: currentPage(),
    initial: true,
  }));
  const main = useRef(null);

  useEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";
    let frame;
    const saveScroll = () => {
      history.replaceState(
        { ...history.state, egeaScroll: [window.scrollX, window.scrollY] },
        "",
      );
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(saveScroll);
    };
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link = event.target.closest?.("a[href]");
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      )
        return;
      const url = new URL(link.href);
      if (url.origin !== directory.origin || !routes.has(url.pathname)) return;
      // Keep in-page anchors and their native browser behavior.
      if (
        url.pathname === location.pathname &&
        url.search === location.search &&
        url.hash
      )
        return;
      event.preventDefault();
      cancelAnimationFrame(frame);
      saveScroll();
      if (url.href !== location.href)
        history.pushState({ egeaScroll: [0, 0] }, "", url);
      setRoute({
        page: routes.get(url.pathname),
        hash: url.hash,
        scroll: [0, 0],
      });
    };
    const onPopState = (event) => {
      cancelAnimationFrame(frame);
      setRoute({
        page: currentPage(),
        hash: location.hash,
        scroll: event.state?.egeaScroll,
      });
    };
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      history.scrollRestoration = previousRestoration;
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useLayoutEffect(() => {
    const metadata = pageMetadata[route.page];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]').content =
      metadata.description;
    if (route.initial) return;
    // Announce the new page to keyboard/screen-reader users without moving the
    // persistent header or letting focus introduce an extra scroll animation.
    main.current?.focus({ preventScroll: true });
    if (route.hash) {
      const target = document.getElementById(
        decodeURIComponent(route.hash.slice(1)),
      );
      if (target) {
        target.scrollIntoView({ behavior: "instant" });
        return;
      }
    }
    const [left, top] = route.scroll || [0, 0];
    window.scrollTo({ left, top, behavior: "instant" });
  }, [route]);

  return { page: route.page, main, route };
}
