import "./../styles/header.css";
import DarkModeToggle from "./dark-mode-toggle";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Create CV</h1>
      <DarkModeToggle />
    </header>
  );
}
