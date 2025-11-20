import "./../styles/experience-section.css";

export default function ExperienceSection({
  person,
  onChange,
  id,
  removeExperience,
  isDisabled = false,
  isMain,
  lastId,
}) {
  return (
    <div className="exp">
      {isMain && id == lastId && (
        <button
          className="remove-exp"
          title="Remove Experience"
          onClick={removeExperience}
        >
          -
        </button>
      )}
      <label htmlFor={`${id}-companyName`} className="companyName">
        <input
          type="text"
          id={`${id}-companyName`}
          placeholder="company name"
          value={person.experience[id].companyName}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-position`} className="position">
        <input
          type="text"
          id={`${id}-position`}
          placeholder="position / role"
          value={person.experience[id].position}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-companyFrom`} className="companyFrom">
        <input
          type="text"
          id={`${id}-companyFrom`}
          placeholder="from year"
          value={person.experience[id].companyFrom}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-companyTo`} className="companyTo">
        <input
          type="text"
          id={`${id}-companyTo`}
          placeholder="to year"
          value={person.experience[id].companyTo}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor={`${id}-yourRole`} className="yourRole">
        <textarea
          id={`${id}-yourRole`}
          placeholder="Roles and Responsibilities / Achievements"
          value={person.experience[id].yourRole}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
}
