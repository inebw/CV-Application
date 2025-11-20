import "./../styles/makeCV.css";
import BasicDetails from "./basic-details";
import Education from "./education";
import Experience from "./experience";

export default function MakeCV({
  person,
  handleChange,
  handleFileChange,
  handleEducationChange,
  handleExperienceChange,
  isDisabled,
}) {
  return (
    <div className="cv">
      <BasicDetails
        person={person}
        onChange={handleChange}
        fileChange={handleFileChange}
        isDisabled={isDisabled}
        className="personal-details"
      />
      <div className="experience">
        <h1>Working Experiences:</h1>
        <Experience
          person={person}
          onChange={handleExperienceChange}
          isDisabled={isDisabled}
          isMain={false}
        />
      </div>
      <div className="education">
        <h1>Educational Details:</h1>
        <Education
          person={person}
          onChange={handleEducationChange}
          isDisabled={isDisabled}
          isMain={false}
        />
      </div>
    </div>
  );
}
