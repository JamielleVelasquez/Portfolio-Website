import "./index.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white p-16 space-y-8">
      <h1 className="text-[4rem] font-medium tracking-wider leading-none flex flex-row">
        Let's Work Together
        <MdOutlineKeyboardArrowRight />
      </h1>
      <hr className="border"></hr>
      <nav className="space-x-20 text-xl ">
        <Link to="/">projects</Link>
        <Link to="/About">about</Link>
        <Link to="/Contact">contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;
