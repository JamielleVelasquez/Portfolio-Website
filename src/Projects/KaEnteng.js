import "../index.css";
import Header from "../Header";
import Footer from "../Footer";
import { ScrollRestoration } from "react-router-dom";
import { SiJavascript, SiJava, SiHtml5, SiCss3 } from "react-icons/si";
import kaenteng_banner from "../Assets/kaenteng_banner.png";
import kaenteng_1 from "../Assets/kaenteng_1.png";
import kaenteng_2 from "../Assets/kaenteng_2.png";
import kaenteng_3 from "../Assets/kaenteng_3.png";

function KaEnteng() {
  return (
    <div className="KaEnteng">
      <Header />
      <div className="flex flex-row p-16 pt-8">
        <div className="pr-8 leading-10">
          <h1 className="font-bold text-5xl">
            Ka-Enteng's Farm-to-Table Restaurant
          </h1>
          <body className="mt-8">
            Full Stack Concept Website
            <br />
            8/21/21 - 4/22/22
            <br />
            Front-End Design and Code, Back-End
          </body>
          <body className="mt-8">
            A full-stack concept website for a restaurant in the Philippines.
            Developed as a requirement for my Software Engineering course.
          </body>
          <div className="mt-8">
            <a
              className="underline"
              href="https://github.com/JamielleVelasquez/Ka-Entengs-Farm-to-Table-Restaurant-Website"
            >
              Github Repository Link
            </a>
          </div>
          <div className="flex flex-row mt-4 justify-between text-4xl">
            <SiJavascript />
            <SiJava />
            <SiHtml5 />
            <SiCss3 />
          </div>
        </div>
        <div className="flex flex-col place-content-center">
          <img className="rounded-xl shadow-xl" src={kaenteng_banner}></img>
        </div>
      </div>
      <div className="flex flex-row p-16 pb-0 pt-8">
        <div className="pr-16 py-16 w-1/2 sticky top-0 h-min">
          We approached Ka-Enteng's 
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="" src={kaenteng_1}></img>
        </div>
      </div>
      <div className="flex flex-row m-16 my-0 p-16 bg-grey">
        <div className="w-1/2 ">
          <img className="" src={kaenteng_2}></img>
        </div>
        <div className="pl-16 w-1/2 flex flex-col place-content-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="flex flex-row p-16 pt-0">
        <div className="pr-16 py-16 w-1/2 sticky top-0 h-min">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="" src={kaenteng_3}></img>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default KaEnteng;
