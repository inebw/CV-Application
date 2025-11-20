import "./../styles/education-section.css";

export default function EducationSection({
  person,
  onChange,
  id,
  removeEducation,
  isDisabled = false,
  isMain,
  lastId,
}) {
  return (
    <div className="deg">
      {isMain && id == lastId && (
        <button className="remove-edu" title="Remove this section" onClick={removeEducation}>
          -
        </button>
      )}
      <label htmlFor={`${id}-schoolName`} className="schoolName">
        <input
          type="text"
          id={`${id}-schoolName`}
          placeholder="school or university"
          value={person.educations[id].schoolName}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-degree`} className="degree">
        <input
          type="text"
          id={`${id}-degree`}
          placeholder="degree/major"
          value={person.educations[id].degree}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-schoolFrom`} className="schoolFrom">
        <input
          type="text"
          id={`${id}-schoolFrom`}
          placeholder="from"
          value={person.educations[id].schoolFrom}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-schoolTo`} className="schoolTo">
        <input
          type="text"
          id={`${id}-schoolTo`}
          placeholder="to"
          value={person.educations[id].schoolTo}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
}
