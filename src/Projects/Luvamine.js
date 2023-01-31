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
import luvamine_banner from "../Assets/luvamine_banner.jpg";
import luvamine_1 from "../Assets/luvamine_1.png";
import luvamine_2 from "../Assets/luvamine_2.png";
import luvamine_3 from "../Assets/luvamine_3.png";

function KaEnteng() {
  return (
    <div className="Luvamine">
      <Header />
      <div className="flex flex-row h-screen p-32 space-x-16">
        <div className="self-center basis-3/5">
          <h1 className="font-bold text-5xl">
            Luvamine
          </h1>
          <body className="mt-8">
            Full Stack Concept Website
            <br />
            September / 1 / 21 - October / 1 / 21
            <br />
            UI Design, Full-Stack Development
          </body>
          <body className="mt-8">
          This was developed as a requirement for my programming course. I designed the UI using Adobe XD and developed the front-end using Bootstrap. I used Java for the back-end, which features review and account functionality using JavaDB as well as an updating cart. In this project, I learned a lot about what happens behind the scenes on a website.</body>
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
          <img className="rounded-xl shadow-xl" src={luvamine_banner}></img>
        </div>
      </div>
      <div className="flex flex-row p-32 pb-0 pt-8">
        <div className="text-lg pr-32 py-32 w-1/2 sticky top-0 h-min">
        The client, Luvamine, is an upcoming fragrance brand making its mark on social media. They started their business on Instagram, and in order to improve their customers' ordering experience, they tasked me with developing a website. Customers can now order through the website instead of sending a message through Instagram, making it easier for both the customer and the client. 
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="" src={luvamine_1}></img>
        </div>
      </div>
      <div className="flex flex-row m-32 my-0 p-16 bg-grey">
        <div className="w-1/2 ">
          <img className="" src={luvamine_2}></img>
        </div>
        <div className="text-lg pl-16 w-1/2 flex flex-col place-content-center">
        Luvamine's website was designed with a clean and minimalist color palette as well as an elegant typeface. Customers can also create an account to view their orders and save the products in their cart. This is because one of the requirements for this project was to implement a secure login system with encryption using Java.
        </div>
      </div>
      <div className="flex flex-row p-32 pt-0">
        <div className="text-lg pr-32 py-32 w-1/2 sticky top-0 h-min">
        Despite not being able to deploy the project or implement a payment gateway, I still learned a lot about full-stack development and Java as a language. The experience of using JavaDB and manipulating the GET and POST methods using Java taught me a lot about web servers and websites in general.
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="" src={luvamine_3}></img>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default KaEnteng;
