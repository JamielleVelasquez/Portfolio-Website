import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header flex flex-row justify-between items-center px-16 py-8">
      <h1 className="font-black text-4xl -tracking-widest">JV</h1>
      <nav className="space-x-20 text-xl">
        <Link to="/">projects</Link>
        <Link to="/About">about</Link>
        <Link to="/Contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header;