// Schedule cells and detailed talks share the same records to prevent content drift.
export const timeSlots = [
  "08:30 – 09:00",
  "09:00 – 10:00",
  "10:00 – 10:30",
  "10:30 – 12:00",
  "12:00 – 14:00",
  "14:00 – 15:30",
  "15:30 – 16:00",
  "16:00 – 17:30",
  "19:00 – 21:00",
];
const event = (label, room, extra = {}) => ({ label, room, ...extra });
const coffee = () => event("Coffee Break", "Atrium");
const lunch = () => event("Lunch", "Atrium");
const contributed = (room) =>
  event("Contributed Talks", room, {
    title: "Contributed Talks",
    presenter: "Contributed speakers",
    abstract:
      "A session of contributed research talks. Individual titles and speakers will be announced.",
  });
export const days = [
  {
    id: "monday",
    name: "Monday",
    short: "Mon",
    date: "December 7, 2026",
    day: 7,
    events: [
      event("Registration", "Atrium"),
      event("Opening Remarks", "LT-A", {
        title: "Opening Remarks",
        presenter: "Organizing Committee",
        abstract:
          "Welcome to EGEA 2026! We introduce the goals, scope, and highlights of the conference, and outline the program for the week.",
      }),
      coffee(),
      event("Plenary Lecture", "LT-A", {
        speaker: "voisin",
        title: "Plenary Lecture: Enumerative geometry and beyond",
        // Sample TeX: String.raw preserves backslashes for MathJax.
        abstract: String.raw`For a smooth projective variety \(X\), we consider curve classes \(\beta \in H_2(X,\mathbb{Z})\) and moduli spaces of stable maps. A typical Gromov–Witten invariant is written
          \[
            \left\langle \gamma_1,\ldots,\gamma_n \right\rangle^X_{g,\beta}
            = \int_{[\overline{\mathcal{M}}_{g,n}(X,\beta)]^{\mathrm{vir}}}
              \prod_{i=1}^{n} \operatorname{ev}_i^*(\gamma_i).
          \]
          I will discuss interactions between Hodge theory, derived methods, and moduli spaces, and highlight several open problems and future directions.`,
      }),
      lunch(),
      contributed("LT-B"),
      coffee(),
      event("Panel Discussion", "Room 2404", {
        title: "Panel Discussion: The next decade",
        presenter: "Various Speakers",
        abstract:
          "A discussion of emerging directions and open questions in enumerative geometry, bringing together perspectives from across the community.",
      }),
      event("Welcome Reception", "Atrium"),
    ],
  },
  {
    id: "tuesday",
    name: "Tuesday",
    short: "Tue",
    date: "December 8, 2026",
    day: 8,
    events: [
      event("Coffee", "Atrium"),
      event("Plenary Lecture", "LT-A", {
        speaker: "ito",
        title: "Gromov–Witten theory and its applications",
        abstract:
          "I will survey recent advances in Gromov–Witten theory, with an emphasis on new computational techniques and applications to Fano varieties and mirror symmetry. Several joint works and open questions will be discussed.",
      }),
      coffee(),
      contributed("LT-B"),
      lunch(),
      event("Plenary Lecture", "LT-A", {
        speaker: "liu",
        title: "Moduli of sheaves and curve counting",
        abstract:
          "This lecture explores moduli spaces of sheaves and their role in curve counting, with a discussion of recent results and open problems.",
      }),
      coffee(),
      contributed("Room 4619"),
      null,
    ],
  },
  {
    id: "wednesday",
    name: "Wednesday",
    short: "Wed",
    date: "December 9, 2026",
    day: 9,
    events: [
      event("Coffee", "Atrium"),
      event("Plenary Lecture", "LT-A", {
        speaker: "graber",
        title: "Localization and enumerative geometry",
        abstract:
          "An exploration of localization techniques and their applications to enumerative problems in algebraic geometry.",
      }),
      coffee(),
      event("Special Session", "LT-A", {
        speaker: "li",
        title: "Derived curves in enumerative geometry",
        abstract:
          "We study derived enhancements of curve counting theories and their applications to Gromov–Witten invariants.",
      }),
      lunch(),
      contributed("LT-B"),
      coffee(),
      event("Plenary Lecture", "LT-A", {
        speaker: "pandharipande",
        title: "Enumerative geometry in higher dimensions",
        abstract:
          "I will discuss recent progress on enumerative invariants in higher dimensions, including stable pair theory, derived algebraic geometry methods, and their interconnections with string theory. This talk will also outline several conjectures and directions for future research.",
      }),
      event("Conference Dinner", "Grand Hall"),
    ],
  },
  {
    id: "thursday",
    name: "Thursday",
    short: "Thu",
    date: "December 10, 2026",
    day: 10,
    events: [
      event("Coffee", "Atrium"),
      event("Plenary Lecture", "LT-A", {
        speaker: "maulik",
        title: "Plenary Lecture",
        abstract: "The title and abstract for this lecture will be announced.",
      }),
      coffee(),
      event("Young Researchers Forum", "LT-B", {
        title: "Young Researchers Forum",
        presenter: "Various Speakers",
        abstract:
          "A forum for early-career researchers to share their work, discuss open questions, and build new connections.",
      }),
      lunch(),
      null,
      coffee(),
      event("Special Session", "Room 2404", {
        title: "Special Session: Interactions with physics",
        presenter: "Various Speakers",
        abstract:
          "This session explores connections between enumerative geometry and mathematical physics, including topological strings, wall-crossing, and quantum invariants. We will highlight recent results and open problems at this interface.",
      }),
      null,
    ],
  },
  {
    id: "friday",
    name: "Friday",
    short: "Fri",
    date: "December 11, 2026",
    day: 11,
    events: [
      event("Coffee", "Atrium"),
      event("Plenary Lecture", "LT-A", {
        speaker: "thomas",
        title: "Plenary Lecture",
        abstract: "The title and abstract for this lecture will be announced.",
      }),
      coffee(),
      event("Problem Session", "LT-A", {
        title: "Problem Session",
        presenter: "Organizing Committee",
        abstract:
          "An open session to share questions and identify directions for future work in enumerative geometry.",
      }),
      lunch(),
      event("Closing Remarks", "LT-A"),
      coffee(),
      null,
      null,
    ],
  },
];
