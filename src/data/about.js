import { conference } from "./conference";

// Edit committee membership here; the About layout updates automatically.
// IDs are unique within each committee, including when someone serves on both.
export const aboutPage = {
  paragraphs: [conference.about, conference.scope],
  committees: [
    {
      id: "scientific-committee",
      title: "Scientific Committee Members",
      members: [
        {
          id: "ionut-ciocan-fontanine",
          name: "Ionut Ciocan-Fontanine",
          affiliation: "Academia Sinica",
        },
        { id: "young-hoon-kiem", name: "Young-Hoon Kiem", affiliation: "KIAS" },
        {
          id: "yuan-pin-lee",
          name: "Yuan-Pin Lee",
          affiliation: "Academia Sinica",
        },
        { id: "jun-li", name: "Jun Li", affiliation: "SCMS" },
        { id: "wei-ping-li", name: "Wei-Ping Li", affiliation: "HKUST" },
        {
          id: "todor-milanov",
          name: "Todor Milanov",
          affiliation: "Kavli IPMU",
        },
        {
          id: "hiraku-nakajima",
          name: "Hiraku Nakajima",
          affiliation: "Kavli IPMU",
        },
        { id: "yong-geun-oh", name: "Yong-Geun Oh", affiliation: "IBS-CGP" },
        {
          id: "yongbin-ruan",
          name: "Yongbin Ruan",
          affiliation: "Zhejiang University",
        },
        { id: "gang-tian", name: "Gang Tian", affiliation: "BICMR" },
        {
          id: "yukinobu-toda",
          name: "Yukinobu Toda",
          affiliation: "Kavli IPMU",
        },
      ],
    },
    {
      id: "organizing-committee",
      title: "Organizing Committee Members",
      members: [
        { id: "wei-ping-li", name: "Wei-Ping Li", affiliation: "HKUST" },
        { id: "qingyuan-jiang", name: "Qingyuan Jiang", affiliation: "HKUST" },
        { id: "quoc-ho", name: "Quoc Ho", affiliation: "HKUST" },
      ],
    },
  ],
};
