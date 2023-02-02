import "./index.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiReact , SiTailwindcss} from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-black text-white p-8 sm:p-16 sm:py-8 lg:p-32 lg:py-16 space-y-4 lg:space-y-8">
      <a
        className="text-2xl sm:text-4xl lg:text-[4rem] font-medium leading-none flex flex-row"
        href="/Contact"
      >
        Let's Work Together
        <MdOutlineKeyboardArrowRight />
      </a>
      <hr className="border"></hr>
      <div className="flex flex-col lg:flex-row justify-between">
        <nav className="space-x-12 lg:space-x-20 text-md sm:text-xl ">
          <Link to="/#Projects">projects</Link>
          <Link to="/About">about</Link>
          <Link to="/Contact">contact</Link>
        </nav>
        <div className="opacity-50 mt-4 sm:text-xl">
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
