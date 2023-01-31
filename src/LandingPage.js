import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import kaenteng_small from "./Assets/kaenteng_small.jpg";
import luvamine_small from "./Assets/luvamine_small.jpg";
import thesis_small from "./Assets/thesis_1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  SiJava,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiAdobexd,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { ScrollRestoration } from "react-router-dom";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div id="LandingPage">
      <Header />
      <div className="px-32 flex flex-col place-content-center space-y-8 h-screen">
        {/*TODO: Add on-load animations*/}
        {/*<h1 className="font-medium text-8xl">
          I'm Jam,
          <br />
          a software developer
          <br />
          passionate about tech.
        </h1>
        */}
        <h1 className="font-medium text-8xl">
          This website
          <br />
          is still under development,
          <br />
          <Link className="underline" to="/Contact">
            but we can still work!
          </Link>
        </h1>
        {/*TODO: Add on-load and hover animations*/}
        <a className="underline opacity-75 text-xl" href="#Projects">
          view my projects
        </a>
      </div>
      {/*About Me*/}
      <div className="p-96 pt-0 mb-64 text-center relative">
        <h1 className="font-medium text-[13rem] text-left leading-none opacity-5 w-[625px] absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-3/4">
          ABOUT
        </h1>
        <h1 className="font-medium text-[13rem] text-right leading-none opacity-5 w-[625px] absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
          ME
        </h1>
        <p className="text-2xl leading-loose absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          I am a freelance software developer based in the Philippines. <br />
          I create software to solve complex problems.
          <br />
          In both tech and gaming, I am constantly striving to improve upon my
          skills.
        </p>
        <Link
          to="/About"
          className="text-3xl font-medium absolute bottom-0 right-32 underline underline-offset-4 flex flex-row"
        >
          Get to Know Me <MdOutlineKeyboardArrowRight fontSize="1.875rem" />
        </Link>
      </div>
      {/*Projects*/}
      <div className="relative" id="Projects">
        <h1 className="font-medium text-8xl overflow-hidden opacity-5 whitespace-nowrap">
          PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS
        </h1>
        <h1 className="font-medium text-8xl absolute left-32 top-8">
          PROJECTS
        </h1>
        {/*Project Card*/}
        <div className="p-32">
          <Link to="/Projects/KaEnteng">
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
                  <p className="text-xl text-bottom mt-12">
                    A full-stack concept website for my Software Engineering
                    course. It has account, reservation, and review
                    functionalities using Java DB.
                  </p>
                </div>
                <div>
                  <small className="text-xl">
                    UI Design, Full-Stack Development
                  </small>
                  <div className="flex flex-row space-x-8 mt-8 text-4xl">
                    <SiJava />
                    <SiJavascript />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiBootstrap />
                    <SiAdobexd />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/*Project Card*/}
        <div className="p-32 pt-0">
          <Link to="/Projects/Luvamine">
            <div className="flex flex-row">
              <div className="basis-1/2 px-6 pt-6 bg-grey">
                <img src={luvamine_small}></img>
              </div>
              <div className="basis-1/2 p-12 flex flex-col justify-between">
                <div>
                  <hr className="transform -translate-y-12 border-grey border bg-grey"></hr>
                  <h1 className="text-5xl font-medium">
                    Luvamine
                  </h1>
                  <p className="text-xl text-bottom mt-12">
                    A full-stack concept website for my Programming
                    course. It features account functionality using Java DB and an updating shopping cart using Java.
                  </p>
                </div>
                <div>
                  <small className="text-xl">
                    UI Design, Full-Stack Development
                  </small>
                  <div className="flex flex-row space-x-8 mt-8 text-4xl">
                    <SiJava />
                    <SiJavascript />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiBootstrap />
                    <SiAdobexd />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/*Project Card*/}
        <div className="p-32 pt-0">
          <Link to="/Projects/Thesis">
            <div className="flex flex-row">
              <div className="basis-1/2 p-6 bg-grey">
              <img src={thesis_small}></img>
              </div>
              <div className="basis-1/2 p-12 flex flex-col justify-between">
                <div>
                  <hr className="transform -translate-y-12 border-grey border bg-grey"></hr>
                  <h1 className="text-5xl font-medium">
                    AI Research on SMOTE and Ensembling
                  </h1>
                  <p className="text-xl text-bottom mt-12">
                  A thesis on the effects of Synthetic Minority Oversampling Technique and Confidence Voting on SVM and RF models in predicting heart disease.
                  </p>
                </div>
                <div>
                  <small className="text-xl">
                    Python Code, Data Analysis
                  </small>
                  <div className="flex flex-row space-x-8 mt-8 text-4xl">
                    <SiPython />
                    <SiScikitlearn />
                    <SiPandas />
                    <SiNumpy />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default LandingPage;
