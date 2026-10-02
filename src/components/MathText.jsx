import { useEffect, useRef } from "react";
import { loadMathJax } from "../lib/mathjax";

function MathContent({ text }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    let disposed = false;
    let completed = false;
    let mathjax;
    async function render() {
      try {
        mathjax = await loadMathJax();
        if (disposed) return;
        await mathjax.typesetPromise([element]);
        completed = true;
        if (disposed) mathjax.typesetClear([element]);
        else element.dataset.mathReady = "true";
      } catch (error) {
        if (!disposed) {
          element.textContent = text;
          console.error("Unable to typeset abstract:", error);
        }
      }
    }
    render();
    return () => {
      disposed = true;
      if (completed) mathjax.typesetClear([element]);
    };
  }, [text]);
  return (
    <span className="math-content" ref={ref}>
      {text}
    </span>
  );
}

export default function MathText({ children }) {
  // A new text value gets its own DOM node: React never reconciles children
  // that MathJax has replaced, even when the mobile timetable changes days.
  return <MathContent key={children} text={children} />;
}
