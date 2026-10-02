// All conference copy lives here. Layout components do not contain event details.
export const conference = {
  name: "Enumerative Geometry in East Asia",
  year: 2026,
  dates: "December 7 – 11, 2026",
  venue: "Hong Kong University of Science and Technology",
  address: "Clear Water Bay, Kowloon, Hong Kong SAR",
  introduction:
    "A conference on recent developments and future directions in enumerative geometry, bringing together researchers from around the world, with a special focus on East Asia.",
  about:
    "Enumerative Geometry in East Asia 2026 (EGEA 2026) will be held at the Hong Kong University of Science and Technology from December 7 to 11, 2026. The conference aims to bring together researchers working on enumerative problems in algebraic geometry and related areas, fostering exchange and collaboration, with a particular focus on the East Asian mathematical community.",
  scope:
    "The scientific program includes plenary lectures, contributed talks, and discussions on curve counting, Gromov–Witten theory, moduli spaces, and the connections between enumerative geometry and mathematical physics.",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Hong+Kong+University+of+Science+and+Technology",
};
export const navigation = [
  { id: "home", label: "Home", href: "./index.html" },
  { id: "about", label: "About", href: "./about.html" },
  { id: "speakers", label: "Speakers", href: "./speakers.html" },
  { id: "program", label: "Program", href: "./program.html" },
  { id: "information", label: "Information", href: "./information.html" },
];
const metadataIntroduction =
  "Enumerative Geometry in East Asia 2026. December 7–11, 2026, at the Hong Kong University of Science and Technology. ";
export const pageMetadata = Object.fromEntries(
  navigation.map(({ id, label }) => [
    id,
    {
      title: `${id === "home" ? `${conference.name} ${conference.year}` : label} · EGEA 2026`,
      description:
        metadataIntroduction +
        (id === "about"
          ? "Conference overview, organizing committee, and scientific committee."
          : "Conference program, speakers, and visitor information."),
    },
  ]),
);
export const pageIntros = {
  about: "About the conference and the people bringing EGEA 2026 together.",
  speakers:
    "We are pleased to welcome the following invited speakers to EGEA 2026.",
  program:
    "A week of lectures, discussions, and research exchange in enumerative algebraic geometry.",
  information:
    "Practical information for your visit to Hong Kong and the Hong Kong University of Science and Technology.",
};
export const quickLinks = [
  {
    title: "About",
    description: "Goals, scope, and conference committees.",
    href: "./about.html",
  },
  {
    title: "Speakers",
    description: "Invited and contributed speakers.",
    href: "./speakers.html",
  },
  {
    title: "Program",
    description: "Schedule, talks, and related events.",
    href: "./program.html",
  },
  {
    title: "Information",
    description: "Travel, accommodation, registration, and more.",
    href: "./information.html",
  },
];
export const speakers = [
  { id: "voisin", name: "Claire Voisin", affiliation: "Collège de France" },
  { id: "ito", name: "Yukari Ito", affiliation: "The University of Tokyo" },
  {
    id: "liu",
    name: "Chiu-Chu Melissa Liu",
    affiliation: "Columbia University",
  },
  { id: "fujii", name: "Akiko Fujii", affiliation: "Osaka University" },
  {
    id: "graber",
    name: "Tom Graber",
    affiliation: "California Institute of Technology",
  },
  {
    id: "nakajima",
    name: "Hiraku Nakajima",
    affiliation: "The University of Tokyo",
  },
  {
    id: "maulik",
    name: "Davide Maulik",
    affiliation: "Massachusetts Institute of Technology",
  },
  { id: "li", name: "Jun Li", affiliation: "Stanford University" },
  {
    id: "birkar",
    name: "Caucher Birkar",
    affiliation: "University of Cambridge",
  },
  {
    id: "pandharipande",
    name: "Rahul Pandharipande",
    affiliation: "ETH Zürich",
  },
  {
    id: "leung",
    name: "Conan Leung",
    affiliation: "Institute of Mathematics, Academia Sinica",
  },
  {
    id: "thomas",
    name: "Richard Thomas",
    affiliation: "Imperial College London",
  },
];
export const footerPanels = {
  Contact: {
    title: "Contact & conference updates",
    paragraphs: [
      "The conference takes place at the Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong SAR.",
      "A dedicated conference contact and registration details will be announced here. For general campus information, visit the university website.",
    ],
    link: { label: "Visit HKUST", href: "https://hkust.edu.hk/" },
  },
  Privacy: {
    title: "Privacy",
    paragraphs: [
      "This static website does not use analytics, advertising cookies, or registration forms, and does not store personal information in your browser.",
      "External links, including maps and university websites, are governed by their own privacy policies. The website hosting provider may process standard server logs.",
    ],
  },
  Acknowledgements: {
    title: "Acknowledgements",
    paragraphs: [
      "The visual design celebrates the ink-wash landscape tradition of East Asia and the coastal setting of the Hong Kong University of Science and Technology.",
      "The campus, landscape, and Hong Kong illustrations were generated with AI for this website. They are artistic interpretations of the locations depicted.",
    ],
  },
};
