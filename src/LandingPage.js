import "./index.css";
import Header from "./Header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />
      <div className="px-16 py-28 flex flex-col space-y-10">
        {/*TODO: Add on-load animations*/}
        <h1 className="font-medium text-8xl">
          I'm Jam,
          <br />
          a front-end developer
          <br />
          passionate about design.
        </h1>
        {/*TODO: Add on-load and hover animations*/}
        <a className="underline opacity-75 text-lg">view my projects</a>
      </div>
      <div className="px-16 h-screen text-center relative">
        <h1 className="font-medium text-[200px] text-left leading-none opacity-5 w-[625px] absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-3/4">
          ABOUT
        </h1>
        <h1 className="font-medium text-[200px] text-right leading-none opacity-5 w-[625px] absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
          ME
        </h1>
        <p className="text-2xl leading-loose absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          I'm a freelance web developer based in the Philippines.
          <br />
          Functional and attractive designs are my specialty.
          <br />I love all things technology, design and gaming.
        </p>
        <a className="text-3xl font-medium absolute bottom-16 right-16 underline underline-offset-4 flex flex-row">
          Get to Know Me <MdOutlineKeyboardArrowRight fontSize="1.875rem" />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
