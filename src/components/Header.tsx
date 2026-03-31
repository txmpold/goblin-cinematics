import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import "./Header.css";
import HeaderButton from "./HeaderButton";

export default function Header({ pageClass = "" }: { pageClass?: string }) {
  return (
    <header className={pageClass}>
      <Link to="/">
        <HeaderButton title="Home" />
      </Link>
      <Link to="/projects">
        <HeaderButton title="Projects" />
      </Link>
      <Link to="/">
        <img src={logo} alt="Goblin Cinematics Logo" />
      </Link>
      <Link to="/contact">
        <HeaderButton title="Contact" />
      </Link>
      <Link to="/about">
        <HeaderButton title="About" />
      </Link>
    </header>
  );
}
