import BasicDetails from "./basic-details";
import Education from "./education";
import Experience from "./experience";
import { useState } from "react";
import MakeCV from "./makeCV";
import "./../styles/form.css";
import newPerson from "./new-person";
import nameMap from "./name-map";
import Edit from "./edit";
import Save from "./save";


export default function Form() {
  const [person, setPerson] = useState(newPerson);
  const [pageNo, setPageNo] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleEdit = () => {
    setIsDisabled(!isDisabled);
  };

  const handleChange = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    const tempPerson = { ...person };
    tempPerson[targetId] = targetValue;
    setErrorMessage("");
    setPerson({ ...tempPerson });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setPerson({ ...person, photo: e.target.files[0] });
  };

  const addEducation = () => {
    const tempPerson = { ...person };
    tempPerson.educations.push({
      schoolName: "",
      degree: "",
      schoolFrom: "",
      schoolTo: "",
    });
    setPerson(tempPerson);
  };

  const removeEducation = () => {
    const tempPerson = { ...person };
    tempPerson.educations.pop();
    setPerson(tempPerson);
  };

  const handleEducationChange = (e) => {
    let [id, name] = e.target.id.split("-");
    id = parseInt(id);
    const value = e.target.value;
    const tempPerson = { ...person };
    tempPerson.educations[id][name] = value;
    setPerson(tempPerson);
    setErrorMessage("");
  };

  const addExperience = () => {
    const tempPerson = { ...person };
    tempPerson.experience.push({
      companyName: "",
      position: "",
      companyFrom: "",
      companyTo: "",
      yourRole: "",
    });
    setPerson(tempPerson);
  };

  const removeExperience = () => {
    const tempPerson = { ...person };
    tempPerson.experience.pop();
    setPerson(tempPerson);
  };

  const handleExperienceChange = (e) => {
    let [id, name] = e.target.id.split("-");
    id = parseInt(id);
    const value = e.target.value;
    const tempPerson = { ...person };
    tempPerson.experience[id][name] = value;
    setPerson(tempPerson);
    setErrorMessage("");
  };

  const nextPage = () => {
    setPageNo(pageNo + 1);
  };

  const prevPage = () => {
    setPageNo(pageNo == 4 ? pageNo - 2 : pageNo - 1);
  };

  function putErrorMessage(key, arrKey) {
    setErrorMessage(
      `${nameMap[arrKey]} cannot be left blank in ${nameMap[key]}`
    );
  }

  const generateCV = () => {
    for (const key in person) {
      if (person.hasOwnProperty(key)) {
        if (Array.isArray(person[key])) {
          for (let i = 0; i < person[key].length; i += 1) {
            for (const arrKey in person[key][i]) {
              if (person[key][i].hasOwnProperty(arrKey)) {
                if (person[key][i][arrKey] == "") {
                  putErrorMessage(key, arrKey);
                  return;
                }
              }
            }
          }
        } else {
          if (person[key] == "") {
            putErrorMessage("basic", key);
            return;
          }
        }
      }
    }
    nextPage();
  };

  switch (pageNo) {
    case 0:
      return (
        <div className="basic-details-container">
          <h1>Let's start by some basic details</h1>
          <BasicDetails
            person={person}
            onChange={handleChange}
            fileChange={handleFileChange}
            className={"basic-details"}
          />
          <button onClick={nextPage}>Continue</button>
        </div>
      );
    case 1:
      return (
        <div className="edu-details">
          <h1>Tell us about your Education</h1>
          <Education
            person={person}
            onChange={handleEducationChange}
            removeEducation={removeEducation}
          />
          <button onClick={addEducation} className="addMore">
            Add More +
          </button>
          <div className="pageControl">
            <button onClick={prevPage}>Go back</button>
            <button onClick={nextPage}>Continue</button>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="exp-details">
          <h1>Add your work experiences</h1>
          <Experience
            person={person}
            onChange={handleExperienceChange}
            removeExperience={removeExperience}
          />
          <button onClick={addExperience} className="addMore">
            Add More +
          </button>
          <button onClick={generateCV} className="generate">
            Generate CV
          </button>
          <button onClick={prevPage}>Go back</button>
          {errorMessage !== "" && <div className="error">{errorMessage}</div>}
        </div>
      );
    case 3:
      {
        setTimeout(nextPage, 1000);
      }
      return (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      );
    case 4:
      return (
        <div className="cv-container">
          <button className="edit" onClick={toggleEdit}>
            {isDisabled ? <Edit/> : <Save/>}
          </button>
          <MakeCV
            person={person}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleEducationChange={handleEducationChange}
            handleExperienceChange={handleExperienceChange}
            isDisabled={isDisabled}
          />
          <div className="pageControl">
            <button onClick={prevPage}>Back</button>
          </div>
        </div>
      );
  }
}
