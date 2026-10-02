// Shared by Speakers and About. Column lengths follow the supplied data.
export default function PeopleList({ people, label, headingLevel = "h2" }) {
  const NameHeading = headingLevel;
  const rows = Math.max(1, Math.ceil(people.length / 2));
  return (
    <ul
      className="people-list"
      style={{ "--people-rows": rows }}
      aria-label={label}
    >
      {people.map((person, index) => (
        <li
          className="person"
          key={person.id}
          data-column-start={index % rows === 0 || undefined}
        >
          <span className="short-rule" />
          <NameHeading className="person-name">{person.name}</NameHeading>
          {person.affiliation && <p>{person.affiliation}</p>}
        </li>
      ))}
    </ul>
  );
}
