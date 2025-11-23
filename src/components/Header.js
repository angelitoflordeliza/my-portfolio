import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
      </ul>
    </header>
  );
}
