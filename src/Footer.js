import "./index.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiReact , SiTailwindcss} from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-black text-white p-32 py-16 space-y-8">
      <a
        className="text-[4rem] font-medium leading-none flex flex-row"
        href="/Contact"
      >
        Let's Work Together
        <MdOutlineKeyboardArrowRight />
      </a>
      <hr className="border"></hr>
      <div className="flex flex-row justify-between">
        <nav className="space-x-20 text-xl ">
          <Link to="/#Projects">projects</Link>
          <Link to="/About">about</Link>
          <Link to="/Contact">contact</Link>
        </nav>
        <div className="opacity-50">
          This website was built using:{" "}
          <div className="flex flex-row space-x-2">
            <SiReact />
            <SiTailwindcss />
          </div>{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
