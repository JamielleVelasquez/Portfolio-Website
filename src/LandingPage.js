import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import kaenteng_small from "./Assets/kaenteng_small.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SiJavascript } from "react-icons/si";

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
        <a className="underline opacity-75 text-xl">view my projects</a>
      </div>
      {/*About Me*/}
      <div className="p-16 my-16 h-screen text-center relative">
        <h1 className="font-medium text-[13rem] text-left leading-none opacity-5 w-[625px] absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-3/4">
          ABOUT
        </h1>
        <h1 className="font-medium text-[13rem] text-right leading-none opacity-5 w-[625px] absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
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
      {/*Projects*/}
      <div className="relative">
        <h1 className="font-medium text-8xl overflow-hidden opacity-5 whitespace-nowrap">
          WORK - PLAY - SLEEP - WORK - PLAY - SLEEP
        </h1>
        <h1 className="font-medium text-8xl absolute left-16 top-12">
          PROJECTS
        </h1>
        <div className="p-16 mt-12 space-y-16">
          {/*Project Card*/}
          <div className="flex flex-row">
            <div className="basis-1/2 px-6 pt-6 bg-grey">
              <img src={kaenteng_small}></img>
            </div>
            <div className="basis-1/2 p-12 flex flex-col justify-between">
              <div>
                <hr className="transform -translate-y-12 border-grey border bg-grey"></hr>
                <h1 className="text-5xl font-medium">
                  Ka-Enteng's Farm-to-Table Restaurant
                </h1>
                <p className="text-xl text-bottom mt-4">
                  A full-stack concept website for my Software Engineering
                  course. It has login, reservation, and review functionalities
                  using a database.
                </p>
              </div>
              <div>
                <small className="text-base">
                  Website Design, Front-End Development, Back-End Development
                </small>
                <div className="flex flex-row mt-4 text-4xl">
                  <SiJavascript />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;