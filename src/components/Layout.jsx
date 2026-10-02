import { useEffect, useRef, useState } from "react";
import {
  conference,
  navigation,
  footerPanels,
  pageIntros,
} from "../data/conference";
import Icon from "./Icon";

export function Brand({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="./index.html"
      aria-label="EGEA 2026 home"
    >
      <span>EGEA</span> <em>2026</em>
    </a>
  );
}
export function Header({ page, route }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => setOpen(false), [route]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner narrow">
        <Brand />
        <button
          ref={toggle}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={item.id === page ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
export function PageHeading({ page }) {
  return (
    <section className="page-heading narrow">
      <p className="eyebrow">Conference</p>
      <h1>{navigation.find((item) => item.id === page)?.label}</h1>
      <span className="short-rule" />
      <p className="page-intro">{pageIntros[page]}</p>
    </section>
  );
}
export function Modal({ panel, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    dialog.current.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = old;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="modal"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="modal-title"
    >
      <div className="modal-inner">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
        <p className="eyebrow">EGEA 2026</p>
        <h2 id="modal-title">{panel.title}</h2>
        {panel.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {panel.link && (
          <a
            className="outline-button"
            href={panel.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {panel.link.label}
            <Icon />
          </a>
        )}
      </div>
    </dialog>
  );
}
export function Footer() {
  const [panel, setPanel] = useState(null);
  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner narrow">
          <div>
            <Brand footer />
            <p>
              {conference.venue}
              <br />
              <span className="footer-address">{conference.address}</span>
            </p>
          </div>
          <nav aria-label="Footer navigation">
            {Object.keys(footerPanels).map((label) => (
              <button key={label} onClick={() => setPanel(footerPanels[label])}>
                {label}
              </button>
            ))}
          </nav>
        </div>
      </footer>
      {panel && <Modal panel={panel} onClose={() => setPanel(null)} />}
    </>
  );
}
