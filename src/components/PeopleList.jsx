// Shared by Speakers and About. Column lengths follow the supplied data.
export default function PeopleList({ people, label, headingLevel = "h2" }) {
  const NameHeading = headingLevel;
  return (
    <ul
      className="people-list"
      style={{ "--people-rows": Math.max(1, Math.ceil(people.length / 2)) }}
      aria-label={label}
    >
      {people.map((person) => (
        <li className="person" key={person.id}>
          <span className="short-rule" />
          <NameHeading className="person-name">{person.name}</NameHeading>
          {person.affiliation && <p>{person.affiliation}</p>}
        </li>
      ))}
    </ul>
  );
}
