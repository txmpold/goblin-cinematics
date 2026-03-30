import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/">
        <img src={logo} alt="Goblin Cinematics Logo" />
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </header>
  );
}
