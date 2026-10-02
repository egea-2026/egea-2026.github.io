const paths = {
  arrow: (
    <>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  plane: (
    <path d="m21 12-8-2-4-7H7l2 7-5 1-2-2H1l2 3-2 3h1l2-2 5 1-2 7h2l4-7 8-2Z" />
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="15" rx="3" />
      <path d="M5 11h14M9 3v8M15 3v8M8 18l-2 3M16 18l2 3M8 15h1M15 15h1" />
    </>
  ),
  car: (
    <>
      <path d="m5 9 2-6h10l2 6M5 17v4M19 17v4" />
      <rect x="3" y="9" width="18" height="9" rx="2" />
      <path d="M6 13h2M16 13h2" />
    </>
  ),
  bus: (
    <>
      <rect x="5" y="3" width="14" height="16" rx="3" />
      <path d="M5 12h14M8 19v2M16 19v2M8 15h1M15 15h1M9 6h6M2 7v5M22 7v5" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 5H5v16h14V5h-4" />
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <path d="M8 11h8M8 15h8" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v5c0 4 16 4 16 0V5M4 10v5c0 4 16 4 16 0v-5M4 15v4c0 4 16 4 16 0v-4" />
    </>
  ),
  message: (
    <path d="M21 11a9 8 0 0 1-9 8H3l2-4a8 8 0 0 1-2-4 9 8 0 0 1 18 0Z" />
  ),
  plug: (
    <>
      <path d="M8 2v6M16 2v6M6 8h12v5a6 6 0 0 1-12 0ZM12 19v4" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h8l4 4v16H6ZM14 2v5h4M9 11h6M9 15h6M9 18h4" />
    </>
  ),
};
export default function Icon({ name = "arrow", className = "" }) {
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
