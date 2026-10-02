import React from "react";
import { createRoot } from "react-dom/client";
import { Header, Footer } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Program from "./pages/Program";
import Information from "./pages/Information";
import "./theme.css";
import "./styles.css";

const route =
  window.location.pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/\.html$/, "") || "index";
const page =
  {
    index: "home",
    about: "about",
    program: "program",
    speakers: "speakers",
    information: "information",
    info: "information",
  }[route] || "home";
const Page = {
  home: Home,
  about: About,
  program: Program,
  speakers: Speakers,
  information: Information,
}[page];
function App() {
  return (
    <div className={`site page-${page}`}>
      <div className="page-art" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header page={page} />
      <main id="main-content">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
