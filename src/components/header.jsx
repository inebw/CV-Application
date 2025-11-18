import "./../styles/header.css";
import DarkModeToggle from "./dark-mode-toggle";
import SvgLogo from "./logo";

export default function Header() {
  return (
    <header>
      <h1 className="logo">
        <SvgLogo />
        Create CV
      </h1>
      <DarkModeToggle />
    </header>
  );
}
