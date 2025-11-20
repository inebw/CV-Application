import ChoosePhoto from "./choose-photo";
import "./../styles/basic-details.css"

export default function BasicDetails({ person, onChange, fileChange, isDisabled = false, className = undefined }) {
  return (
    <div className={className}>
      <ChoosePhoto photo={person.photo} onChange={fileChange} isDisabled={isDisabled}/>
      <label htmlFor="firstName">
        <input
          type="text"
          id="firstName"
          placeholder="first name"
          value={person.firstName}
          onChange={onChange}
          disabled={isDisabled}
          maxLength={24}
        />
      </label>
      <label htmlFor="lastName">
        <input
          type="text"
          id="lastName"
          placeholder="last name"
          value={person.lastName}
          onChange={onChange}
          disabled={isDisabled}
          maxLength={24}
        />
      </label>
      <label htmlFor="phone">
        <input
          type="tel"
          id="phone"
          placeholder="phone number"
          value={person.phone}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="e-mail"
          value={person.email}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor="city">
        <input
          type="text"
          id="city"
          placeholder="city"
          value={person.city}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor="state">
        <input
          type="text"
          id="state"
          placeholder="state"
          value={person.state}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
      <label htmlFor="country">
        <input
          type="text"
          id="country"
          placeholder="country"
          value={person.country}
          onChange={onChange}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
}
