import ExperienceSection from "./experience-section";
import "./../styles/experience.css";

export default function Experience({
  person,
  onChange,
  removeExperience,
  isDisabled = false,
  isMain = true,
}) {
  const lastId = person.experience.length - 1;
  return (
    <>
      <div className="all-experiences">
        {person.experience.map((experience, index) => (
          <ExperienceSection
            key={index}
            person={person}
            onChange={onChange}
            id={index}
            isDisabled={isDisabled}
            isMain={isMain}
            removeExperience={removeExperience}
            lastId={lastId}
          />
        ))}
      </div>
    </>
  );
}
