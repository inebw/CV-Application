import EducationSection from "./education-section";
import "./../styles/education.css";

export default function Education({
  person,
  onChange,
  removeEducation,
  isDisabled = false,
  isMain = true,
}) {
  const lastId = person.educations.length - 1;
  return (
    <>
      <div className="all-degrees">
        {person.educations.map((degree, index) => (
          <EducationSection
            key={index}
            person={person}
            onChange={onChange}
            id={index}
            isDisabled={isDisabled}
            isMain={isMain}
            removeEducation={removeEducation}
            lastId={lastId}
          />
        ))}
      </div>
    </>
  );
}
