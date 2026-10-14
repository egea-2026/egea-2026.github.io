import { speakers } from "../data/speakers";
import { PageHeading } from "../components/Layout";
import PeopleList from "../components/PeopleList";
export default function Speakers() {
  return (
    <>
      <PageHeading page="speakers" />
      <div className="people-section narrow">
        <PeopleList people={speakers} label="Invited speakers" />
      </div>
    </>
  );
}
