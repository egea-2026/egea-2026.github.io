import { speakers } from "../data/speakers";
import { PageHeading } from "../components/Layout";
import PeopleList from "../components/PeopleList";

const collator = new Intl.Collator("en", { sensitivity: "base" });
const lastName = ({ name }) => name.trim().split(/\s+/).at(-1);
const speakersByLastName = [...speakers].sort(
  (a, b) =>
    collator.compare(lastName(a), lastName(b)) ||
    collator.compare(a.name, b.name),
);

export default function Speakers() {
  return (
    <>
      <PageHeading page="speakers" />
      <div className="people-section narrow">
        <PeopleList people={speakersByLastName} label="Invited speakers" />
      </div>
    </>
  );
}
