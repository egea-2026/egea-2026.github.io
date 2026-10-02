export const campusIntro =
  "The Hong Kong University of Science and Technology (HKUST) is located in Clear Water Bay, on the southeastern coast of Kowloon. Here are the main ways to reach campus:";
export const transport = [
  {
    icon: "plane",
    title: "From Hong Kong International Airport",
    description:
      "Take the Airport Express to Kowloon or Hong Kong Station, then transfer to the MTR and take a taxi or minibus to HKUST.",
    note: "Recommended route: Airport Express → Kowloon / Hong Kong → MTR → Taxi / Minibus",
    duration: "60–75 min",
    details:
      "Allow additional time for transfers and traffic. Use the destination “Hong Kong University of Science and Technology, Clear Water Bay” when arranging the final taxi journey.",
  },
  {
    icon: "train",
    title: "By MTR + Taxi / Minibus",
    description:
      "Take the MTR to Hang Hau Station (Tseung Kwan O Line) or Choi Hung Station (Kwun Tong Line), then take a minibus or taxi to HKUST.",
    note: "From Hang Hau: green minibus 11M. From Choi Hung: minibus 1A or 1M.",
    duration: "20–30 min",
    details:
      "The estimated time is for the connection from the MTR station to campus. Check the destination on the minibus and current service information before boarding.",
  },
  {
    icon: "car",
    title: "By Taxi",
    description:
      "Take a taxi directly to Hong Kong University of Science and Technology, Clear Water Bay.",
    duration: "45–60 min",
    note: "(from downtown)",
    details:
      "Show the driver the destination: 香港科技大學（清水灣）. Travel time varies with your starting point and traffic.",
  },
  {
    icon: "bus",
    title: "Campus Shuttle / Local Transit",
    description:
      "Various green minibuses and buses serve HKUST from Hang Hau, Choi Hung and surrounding areas.",
    note: "Please refer to on-site signage for the latest routes and schedules.",
    duration: "20–30 min",
    details:
      "Use the campus map to find your building after arrival. Any conference-specific shuttle arrangements will be announced separately.",
  },
];
export const practicalDetails = [
  { icon: "pin", label: "Venue", value: "Academic Building, HKUST" },
  {
    icon: "clipboard",
    label: "Registration Desk",
    value: "Main foyer (Academic Building)",
  },
  { icon: "sun", label: "Weather", value: "Mild December weather (15–22°C)" },
  { icon: "coins", label: "Currency", value: "Hong Kong Dollar (HKD)" },
  { icon: "message", label: "Language", value: "English and Cantonese" },
  { icon: "plug", label: "Power", value: "UK-style plug (Type G, 220V, 50Hz)" },
  {
    icon: "document",
    label: "Visa",
    value: "Visitors should check entry requirements in advance.",
  },
];
export const destinations = [
  {
    title: "Victoria Harbour",
    description:
      "Iconic skyline and waterfront views, especially beautiful at night.",
    query: "Victoria Harbour Hong Kong",
  },
  {
    title: "The Peak",
    description:
      "Panoramic views over Hong Kong and its islands from Victoria Peak.",
    query: "Victoria Peak Hong Kong",
  },
  {
    title: "Star Ferry",
    description: "A classic and picturesque ride across Victoria Harbour.",
    query: "Star Ferry Hong Kong",
  },
  {
    title: "M+ Museum / West Kowloon",
    description:
      "World-class museum of visual culture, located in the West Kowloon Cultural District.",
    query: "M+ Museum Hong Kong",
  },
  {
    title: "Temple Street / Central",
    description:
      "Experience local culture, markets, and the vibrant city atmosphere.",
    query: "Temple Street Hong Kong",
  },
  {
    title: "Sai Kung / Clear Water Bay",
    description:
      "Beautiful coastline, hiking trails and relaxed seaside scenery, close to HKUST.",
    query: "Sai Kung Hong Kong",
  },
];

export const visitorUpdates = {
  title: "Registration & accommodation",
  description:
    "Registration instructions and recommended accommodation will be announced here.",
};

// Intrinsic dimensions of the three-column, two-row illustration sheet.
export const destinationArtwork = {
  src: "./images/hong-kong.webp",
  width: 1536,
  height: 1024,
  columns: 3,
  rows: 2,
};
