import { aboutPage } from "../data/about";
import { PageHeading } from "../components/Layout";
import PeopleList from "../components/PeopleList";

export default function About() {
  return (
    <>
      <PageHeading page="about" />
      <div className="about-content people-section narrow">
        <div className="about-overview">
          {aboutPage.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {aboutPage.committees.map((committee) => (
          <section
            className="committee-section"
            key={committee.id}
            aria-labelledby={committee.id}
          >
            <h2 className="eyebrow section-title" id={committee.id}>
              {committee.title}
            </h2>
            <PeopleList
              people={committee.members}
              label={committee.title}
              headingLevel="h3"
            />
          </section>
        ))}
      </div>
    </>
  );
}
