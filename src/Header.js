import "./index.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header absolute flex flex-row justify-center sm:justify-between items-center px-8 sm:px-16 xl:px-32 py-8" style={{width: "99vw"}}>
      <Link className="hidden sm:block" to="/">
        <h1 className="font-black text-4xl -tracking-widest">JV</h1>
      </Link>
      <nav className="space-x-12 sm:space-x-20 text-md sm:text-xl">
        <Link to="/#Projects">projects</Link>
        <Link to="/About">about</Link>
        <Link to="/Contact">contact</Link>
      </nav>
    </header>
  );
}

export default Header;
