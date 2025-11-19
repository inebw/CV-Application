import BasicDetails from "./basic-details";
import Education from "./education";
import Experience from "./experience";
import { useState } from "react";

export default function Form() {
  const newPerson = {
    firstName: "Punit",
    lastName: "Yadav",
    phone: 9453258536,
    email: "punit965@gmail.com",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    photo: null,
    educations: [
      {
        schoolName: "Kendriya Vidyalaya",
        degree: "Computer Science",
        schoolFrom: "2015",
        schoolTo: "2017",
      },
      {
        schoolName: "Integral Unversity",
        degree: "BCA",
        schoolFrom: "2018",
        schoolTo: "2021",
      },
    ],
    experience: [
      {
        company: "Vegam Solutions",
        from: 2024,
        to: 2025,
      },
    ],
  };

  const [person, setPerson] = useState(newPerson);

  const handleChange = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    const tempPerson = { ...person };
    tempPerson[targetId] = targetValue;

    setPerson({ ...tempPerson });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setPerson({ ...person, photo: e.target.files[0] });
  };

  const addEducation = () => {
    const tempPerson = {...person}
    tempPerson.educations.push({schoolName:"", degree:"", schoolFrom:"", schoolTo:""})
    setPerson(tempPerson)
  }

  const handleEducationChange = (e) => {
    let [id, name] = e.target.id.split("-")
    id = parseInt(id)
    const value = e.target.value
    const tempPerson = {...person}
    tempPerson.educations[id][name] = value;
    setPerson(tempPerson)
  }
  return (
    <div className="form">
      <BasicDetails
        person={person}
        onChange={handleChange}
        fileChange={handleFileChange}
      />
      <Education person={person} onChange={handleEducationChange} addEducation={addEducation} />
      <Experience />
    </div>
  );
}
