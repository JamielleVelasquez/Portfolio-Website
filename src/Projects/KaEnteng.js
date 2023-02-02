import "../index.css";
import Header from "../Header";
import Footer from "../Footer";
import { ScrollRestoration } from "react-router-dom";
import {
  SiJavascript,
  SiJava,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiAdobexd,
} from "react-icons/si";
import kaenteng_banner from "../Assets/kaenteng_banner.png";
import kaenteng_1 from "../Assets/kaenteng_1.png";
import kaenteng_2 from "../Assets/kaenteng_2.png";
import kaenteng_3 from "../Assets/kaenteng_3.png";

function KaEnteng() {
  return (
    <div className="KaEnteng">
      <Header />
      <div className="flex flex-row h-screen p-32 space-x-16">
        <div className="self-center basis-3/5">
          <h1 className="font-bold text-5xl">
            Ka-Enteng's Farm-to-Table Restaurant
          </h1>
          <body className="mt-8">
            Full Stack Concept Website
            <br />
            August / 21 / 21 - April / 22 / 22
            <br />
            UI Design, Full-Stack Development
          </body>
          <body className="mt-8">
          This was developed as a requirement for my software engineering course. I designed the UI using Adobe XD and developed the front-end using Bootstrap. I also helped implement the account, reservation, and review functionalities using Java DB. In this project, I learned a lot about the software engineering process.
          </body>
          <div className="mt-8">
            <a
              className="underline"
              href="https://github.com/JamielleVelasquez/Ka-Entengs-Farm-to-Table-Restaurant-Website"
              target="_blank"
            >
              Github Repository Link
            </a>
          </div>
          <div className="flex flex-row mt-12 justify-between text-4xl">
            <SiJava />
            <SiJavascript />
            <SiHtml5 />
            <SiCss3 />
            <SiBootstrap />
            <SiAdobexd />
          </div>
        </div>
        <div className="flex flex-col place-content-center">
          <img className="rounded-xl shadow-xl" src={kaenteng_banner}></img>
        </div>
      </div>
      <div className="flex flex-row p-32 pb-0 pt-8">
        <div className="text-lg pr-32 py-32 w-1/2 sticky top-0 h-min">
        The client wanted Ka-Enteng's website to reflect the beauty of the farm. With that in mind, the website was designed with natural colors of greens and browns as well as a simple yet elegant typeface. The client's main goal was to create more exposure for the farm and simplify the reservation process. Customers can also see the reviews of past customers on the landing page. The reviews are updated dynamically based on the review database.
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="" src={kaenteng_1}></img>
        </div>
      </div>
      <div className="flex flex-row m-32 my-0 p-16 bg-grey">
        <div className="w-1/2 ">
          <img className="" src={kaenteng_2}></img>
        </div>
        <div className="text-lg pl-16 w-1/2 flex flex-col place-content-center">
        The client wanted to streamline the reservation process on their website. Instead of customers calling to make a reservation, they can now do so through the website. The back-end of the website manages the available slots per day and allows customers to make reservations only when space is available. The clients can also view and edit reservations in the database.
        </div>
      </div>
      <div className="flex flex-row p-32 pt-0">
        <div className="text-lg pr-32 py-32 w-1/2 sticky top-0 h-min">
        Because this website was developed as a requirement for my software engineering course, it went through the software engineering process. This includes a project plan, design document, quality assurance, testing, etc. <br /><br /><a href="https://drive.google.com/uc?export=download&id=1OUqlxjxziRSTXEHp4N4MadQLBq8rd2F2" target="_blank" className="mt-8 underline">You can find all of these documents here.</a>
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
