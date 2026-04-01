import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import "./Header.css";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <HeaderButton title="HOME" />
      </Link>
      <Link to="/projects">
        <HeaderButton title="PROJECTS" />
      </Link>
      <Link to="/">
        <img src={logo} alt="Goblin Cinematics Logo" />
      </Link>
      <Link to="/contact">
        <HeaderButton title="CONTACT" />
      </Link>
      <Link to="/about">
        <HeaderButton title="ABOUT" />
      </Link>
    </header>
  );
}
