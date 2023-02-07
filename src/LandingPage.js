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
      <div className="px-8 sm:px-16 xl:px-32 flex flex-col place-content-center space-y-8 h-screen">
        {/*TODO: Add on-load animations*/}
        <h1 className="font-medium text-4xl sm:text-7xl 2xl:text-8xl">
          I'm Jam,
          <br />
          a software developer
          <br />
          passionate about tech.
        </h1>
        {/*
        <h1 className="font-medium text-8xl">
          This website
          <br />
          is still under development,
          <br />
          <Link className="underline" to="/Contact">
            but we can still work!
          </Link>
        </h1>
        */}

        {/*TODO: Add on-load and hover animations*/}
        <a className="underline opacity-75 text-md sm:text-xl" href="#Projects">
          view my projects
        </a>
      </div>
      {/*About Me*/}
      <div className="sm:px-16 mb-[50vh]">
        {/*
        <h1 className="font-medium text-8xl lg:text-[13rem] text-left leading-none opacity-5 absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-3/4">
          ABOUT
        </h1>
        <h1 className="font-medium text-8xl lg:text-[13rem] text-right leading-none opacity-5 absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4">
          ME
        </h1>
        */}

        <p className="px-8 text-sm sm:text-2xl leading-loose w-fit mx-auto">
          I am a freelance software developer based in the Philippines. <br />
          I create software to solve complex problems.
          <br />
          In both tech and gaming, I am constantly striving to improve upon my
          skills.
        </p>
        <Link
          to="/About"
          className="text-md sm:text-3xl font-medium absolute right-8 -bottom-64 sm:-bottom-64 sm:right-16 xl:right-32 underline underline-offset-4 flex flex-row"
        >
          Get to Know Me <MdOutlineKeyboardArrowRight fontSize="1.875rem" />
        </Link>
      </div>
      {/*Projects*/}
      <div className="relative" id="Projects">
        <h1 className="font-medium mb-4 text-4xl sm:text-6xl lg:text-8xl overflow-hidden opacity-5 whitespace-nowrap">
          PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS - PROJECTS
        </h1>
        <h1 className="font-medium text-4xl sm:text-6xl lg:text-8xl absolute left-8 top-4 sm:left-16 xl:left-32 sm:top-8">
          PROJECTS
        </h1>
        {/*Project Card*/}
        <div className="p-8 sm:p-16 xl:p-32">
          <Link to="/Projects/KaEnteng">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:px-6 lg:pt-6 bg-grey">
                <img src={kaenteng_small}></img>
              </div>
              <div className="lg:p-8 flex flex-col space-y-4 sm:space-y-6 lg:justify-between">
                <hr className="lg:hidden transform -translate-y-12 border-grey border bg-grey"></hr>
                <h1 className="text-2xl sm:text-4xl xl:text-5xl font-medium">
                  Ka-Enteng's Farm-to-Table Restaurant
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-bottom lg:mt-12">
                  A full-stack concept website for my Software Engineering
                  course. It has account, reservation, and review
                  functionalities using Java DB.
                </p>

                <small className="text-sm sm:text-lg lg:text-xl">
                  UI Design, Full-Stack Development
                </small>
                <div className="flex flex-row space-x-8 lg:mt-8 text-md sm:text-4xl justify-between sm:my-4 lg:text-4xl">
                  <SiJava />
                  <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiBootstrap />
                  <SiAdobexd />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/*Project Card*/}
        <div className="p-8 sm:p-16 sm:pt-0 xl:p-32 xl:pt-0">
          <Link to="/Projects/Luvamine">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:px-6 lg:pt-6 bg-grey">
                <img src={luvamine_small}></img>
              </div>
              <div className="lg:p-8 flex flex-col space-y-4 sm:space-y-6 lg:justify-between">
                <hr className="lg:hidden transform -translate-y-12 border-grey border bg-grey"></hr>
                <h1 className="text-2xl sm:text-4xl xl:text-5xl font-medium">
                  Luvamine
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-bottom lg:mt-12">
                  A full-stack concept website for my Programming course. It
                  features account functionality using Java DB and an updating
                  shopping cart using Java.
                </p>

                <small className="text-sm sm:text-lg lg:text-xl">
                  UI Design, Full-Stack Development
                </small>
                <div className="flex flex-row space-x-8 lg:mt-8 text-md sm:text-4xl justify-between sm:my-4 lg:text-4xl">
                  <SiJava />
                  <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                  <SiBootstrap />
                  <SiAdobexd />
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/*Project Card*/}
        <div className="p-8 sm:p-16 sm:pt-0 xl:p-32 xl:pt-0">
          <Link to="/Projects/Thesis">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:px-6 lg:pt-6 bg-grey">
                <img src={thesis_small}></img>
              </div>
              <div className="lg:p-8 flex flex-col space-y-4 sm:space-y-6 lg:justify-between">
                <hr className="lg:hidden transform -translate-y-12 border-grey border bg-grey"></hr>
                <h1 className="text-2xl sm:text-4xl xl:text-5xl font-medium">
                  AI Research on SMOTE and Ensembling
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-bottom lg:mt-12">
                  A thesis on the effects of Synthetic Minority Oversampling
                  Technique and Confidence Voting on SVM and RF models in
                  predicting heart disease.
                </p>

                <small className="text-sm sm:text-lg lg:text-xl">
                  Python Code, Data Analysis
                </small>
                <div className="flex flex-row space-x-8 lg:mt-8 text-md sm:text-4xl justify-between sm:my-4 lg:text-4xl">
                  <SiPython />
                  <SiScikitlearn />
                  <SiPandas />
                  <SiNumpy />
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
