export default function EducationSection({ person, onChange, id}) {
  return (
    <form action="#">
      <label htmlFor={`${id}-schoolName`}>
        <input
          type="text"
          id={`${id}-schoolName`}
          placeholder="school or university"
          value={person.educations[id].schoolName}
          onChange={onChange}
        />
      </label>
      <label htmlFor={`${id}-degree`}>
        <input
          type="text"
          id={`${id}-degree`}
          placeholder="degree/major"
          value={person.educations[id].degree}
          onChange={onChange}
        />
      </label>
      <label htmlFor={`${id}-schoolFrom`}>
        <input
          type="text"
          id={`${id}-schoolFrom`}
          placeholder="from year"
          value={person.educations[id].schoolFrom}
          onChange={onChange}
        />
      </label>
      <label htmlFor={`${id}-degree`}>
        <input
          type="text"
          id={`${id}-schoolTo`}
          placeholder="to year"
          value={person.educations[id].schoolTo}
          onChange={onChange}
        />
      </label>
    </form>
  );
}
