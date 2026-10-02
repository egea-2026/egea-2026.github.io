let ready;

export function loadMathJax() {
  if (ready) return ready;
  const base = new URL(
    `${import.meta.env.BASE_URL}vendor/mathjax/`,
    document.baseURI,
  );
  ready = new Promise((resolve, reject) => {
    window.MathJax = {
      loader: { paths: { mathjax: base.href.replace(/\/$/, "") } },
      tex: {
        inlineMath: [
          ["\\(", "\\)"],
          ["$", "$"],
        ],
        displayMath: [
          ["\\[", "\\]"],
          ["$$", "$$"],
        ],
        processEscapes: true,
      },
      output: {
        font: "mathjax-stix2",
        fontPath: new URL("stix2", base).href,
      },
      // React explicitly typesets each abstract after mounting it.
      startup: { typeset: false },
    };
    const script = document.createElement("script");
    script.src = new URL("tex-chtml-nofont.js", base).href;
    script.async = true;
    script.onload = () =>
      window.MathJax.startup.promise.then(
        () => resolve(window.MathJax),
        reject,
      );
    script.onerror = () => reject(new Error("Unable to load MathJax."));
    document.head.append(script);
  });
  return ready;
}
