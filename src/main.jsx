import React from "react";
import { createRoot } from "react-dom/client";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Program from "./pages/Program";
import Information from "./pages/Information";
import usePageNavigation from "./hooks/usePageNavigation";
import "./theme.css";
import "./styles.css";

const pages = {
  home: Home,
  about: About,
  program: Program,
  speakers: Speakers,
  information: Information,
};
function App() {
  const { page, main, route } = usePageNavigation();
  const Page = pages[page];
  return (
    <div className={`site page-${page}`}>
      <div className="page-art" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header page={page} route={route} />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
