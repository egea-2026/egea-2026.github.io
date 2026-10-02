import { conference } from "./conference";

// Replace these sample records with confirmed names and affiliations.
// IDs should remain unique within each committee; no layout changes are needed.
export const aboutPage = {
  paragraphs: [conference.about, conference.scope],
  committeeNotice:
    "Sample names are shown below for now. Committee membership and affiliations will be confirmed.",
  committees: [
    {
      id: "organizing-committee",
      title: "Organizing Committee Members",
      members: [
        {
          id: "alex-chen",
          name: "Alex Chen",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "maya-lin",
          name: "Maya Lin",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "daniel-park",
          name: "Daniel Park",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "emi-tanaka",
          name: "Emi Tanaka",
          affiliation: "Affiliation to be confirmed",
        },
      ],
    },
    {
      id: "scientific-committee",
      title: "Scientific Committee Members",
      members: [
        {
          id: "noah-kim",
          name: "Noah Kim",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "sofia-wang",
          name: "Sofia Wang",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "ren-sato",
          name: "Ren Sato",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "hana-lee",
          name: "Hana Lee",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "leo-zhang",
          name: "Leo Zhang",
          affiliation: "Affiliation to be confirmed",
        },
        {
          id: "yuna-mori",
          name: "Yuna Mori",
          affiliation: "Affiliation to be confirmed",
        },
      ],
    },
  ],
};
