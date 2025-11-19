import ChoosePhoto from "./choose-photo";

export default function BasicDetails({ person, onChange, fileChange }) {
  return (
    <form action="#">
      <h2>Let's start with your basic details</h2>
      <ChoosePhoto photo={person.photo} onChange={fileChange}/>
      <label htmlFor="firstName">
        <input
          type="text"
          id="firstName"
          placeholder="first name"
          value={person.firstName}
          onChange={onChange}
        />
      </label>
      <label htmlFor="lastName">
        <input
          type="text"
          id="lastName"
          placeholder="last name"
          value={person.lastName}
          onChange={onChange}
        />
      </label>
      <label htmlFor="phone">
        <input
          type="tel"
          id="phone"
          placeholder="phone number"
          value={person.phone}
          onChange={onChange}
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="e-mail"
          value={person.email}
          onChange={onChange}
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          id="city"
          placeholder="city"
          value={person.city}
          onChange={onChange}
        />
      </label>
      <label htmlFor="state">
        <input
          type="text"
          id="state"
          placeholder="state"
          value={person.state}
          onChange={onChange}
        />
      </label>
      <label htmlFor="country">
        <input
          type="text"
          id="country"
          placeholder="country"
          value={person.country}
          onChange={onChange}
        />
      </label>
    </form>
  );
}
