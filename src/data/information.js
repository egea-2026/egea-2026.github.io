// The same campus embed used on HKUST's official contact page.
export const campusMap = {
  embedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2194.3535706667176!2d114.26189251748933!3d22.336702957316167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404046bc19c7e15:0x2bedd58f9cf841be!2sHong+Kong+University+of+Science+and+Technology+(HKUST)!5e0!3m2!1sen!2sus!4v1734949533453!5m2!1sen!2sus",
};

export const campusIntro =
  "The Hong Kong University of Science and Technology (HKUST) is in Clear Water Bay. These public transport routes bring you to campus; check live directions before travelling.";

const transitDirections = (origin) => {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination:
      "Hong Kong University of Science and Technology, Clear Water Bay, Hong Kong",
    travelmode: "transit",
  });
  return `https://www.google.com/maps/dir/?${params}`;
};

export const transport = [
  {
    icon: "plane",
    title: "From the airport",
    description:
      "Take bus A29, then connect to bus 91M or minibus 11M for HKUST.",
    note: "Check Google Maps for the best connection.",
    duration: "Varies",
    details:
      "Transfer points and journey times vary. Use Google Maps for current public transport directions from the airport to HKUST.",
    routeUrl: transitDirections("Hong Kong International Airport, Hong Kong"),
  },
  {
    icon: "train",
    title: "From Hang Hau MTR",
    description: "Use Exit B1 for green minibus 11M to HKUST.",
    note: "Bus 91M from Exit B2 is another option.",
    duration: "~ 20 min",
    details:
      "From Hang Hau Station, use Exit B1 and board green minibus 11M for HKUST. Alternatively, use Exit B2 and take bus 91M. Get off at HKUST.",
    routeUrl: transitDirections(
      "Hang Hau, Tseung Kwan O, New Territories, Hong Kong",
    ),
  },
  {
    icon: "bus",
    title: "From Tseung Kwan O MTR",
    description: "Use Exit A1 for bus 792M to HKUST.",
    note: "Tseung Kwan O is also known as TKO.",
    duration: "~ 30 min",
    details:
      "From Tseung Kwan O Station, use Exit A1 and board bus 792M towards Sai Kung. Get off at HKUST.",
    routeUrl: transitDirections("Tseung Kwan O MTR Station, Hong Kong"),
  },
  {
    icon: "car",
    title: "Taxi or Uber",
    description:
      "Uber works in Hong Kong. You can also hail or call a taxi to HKUST.",
    note: "Have HKD cash ready and save the destination in Traditional Chinese.",
    duration: "Varies",
    details:
      "Show the taxi driver: 香港科技大學（清水灣）. Cash is a useful backup for a taxi fare; electronic payment options are also available. Travel time depends on your starting point and traffic.",
  },
];
export const practicalDetails = [
  { icon: "pin", label: "Venue", value: "TBA" },
  {
    icon: "clipboard",
    label: "Registration Desk",
    value: "TBA",
  },
  { icon: "sun", label: "Weather", value: "Mild December weather (15–22°C)" },
  { icon: "coins", label: "Currency", value: "Hong Kong Dollar (HKD)" },
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
    title: "Sai Kung",
    description: "Stroll along the waterfront and enjoy the harbour views.",
    query: "Sai Kung Waterfront Park, Hong Kong",
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
