import EducationSection from "./education-section";

export default function Education({ person, onChange, addEducation }) {
  return (
    <>
      <h2>Let us know about your education</h2>
      <div className="all-degrees">
        {person.educations.map((degree, index) => (
          <EducationSection
            key={index}
            person = {person}
            onChange={onChange}
            id={index}
          />
        ))}
      </div>
      <button onClick={addEducation}>Add More</button>
    </>
  );
}
