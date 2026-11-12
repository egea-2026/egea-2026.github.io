// Schedule from talks/Talk_Schedule(EGEA26).xlsx.
// Speaker IDs refer to speakers.js, which owns names, affiliations, and talk text.
export const timeSlots = [
  "10:00 – 11:00",
  "11:20 – 12:20",
  "14:30 – 15:30",
  "16:00 – 17:00",
  "Time TBA",
];

const talk = (speaker) => ({ speaker });

export const days = [
  {
    id: "monday",
    name: "Monday",
    short: "Mon",
    date: "December 7, 2026",
    day: 7,
    events: [
      talk("qizheng-yin"),
      talk("adeel-khan"),
      talk("tudor-padurariu"),
      talk("yang-zhou"),
      null,
    ],
  },
  {
    id: "tuesday",
    name: "Tuesday",
    short: "Tue",
    date: "December 8, 2026",
    day: 8,
    events: [
      talk("zhengyu-zong"),
      talk("lucien-hennecart"),
      talk("hyeonjun-park"),
      talk("junwu-tu"),
      { label: "Conference Dinner" },
    ],
  },
  {
    id: "wednesday",
    name: "Wednesday",
    short: "Wed",
    date: "December 9, 2026",
    day: 9,
    events: [
      talk("junliang-shen"),
      talk("alexandre-minets"),
      { label: "Free afternoon", rowSpan: 2 },
      null,
      null,
    ],
  },
  {
    id: "thursday",
    name: "Thursday",
    short: "Thu",
    date: "December 10, 2026",
    day: 10,
    events: [
      talk("chenjing-bu"),
      talk("christopher-brav"),
      talk("andres-ibanez-nunez"),
      talk("yukinobu-toda"),
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
      talk("chunyi-li"),
      talk("tasuki-kinjo"),
      talk("woonam-lim"),
      talk("francesco-sala"),
      null,
    ],
  },
];
