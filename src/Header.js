import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header absolute flex flex-row justify-between items-center px-32 py-8" style={{width: "99vw"}}>
      <Link to="/">
        <h1 className="font-black text-4xl -tracking-widest">JV</h1>
      </Link>
      <nav className="space-x-20 text-xl">
        <Link to="/#Projects">projects</Link>
        <Link to="/About">about</Link>
        <Link to="/Contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header;
