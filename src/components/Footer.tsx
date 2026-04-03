import goblin from "../assets/images/goblin.png";
import "../pages/animation.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="slide-up">
      <img src={goblin} alt="Goblin Cinematics Logo" />
      <p>© 2024 Goblin Cinematics. All rights reserved.</p>
    </footer>
  );
}
