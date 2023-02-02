import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import picture from "./Assets/aboutme_picture2.jpg";
import {
  SiJavascript,
  SiJava,
  SiHtml5,
  SiCss3,
  SiAdobexd,
  SiReact,
  SiPython,
} from "react-icons/si";
import { MdDownload } from "react-icons/md";
function About() {
  return (
    <div id="About">
      <Header />
      <div className="content-center p-8 sm:p-16 h-screen pt-24 sm:pt-32 xl:p-32 gap-8">
        <img
          className="float-left w-36 sm:w-64 md:w-72 lg:w-80 2xl:w-[25vw] mb-4 mr-4 2xl:mr-16 sm:wb-8 sm:mr-8 rounded-xl shadow-xl"
          src={picture}
        />
        <body className="text-sm sm:text-lg 2xl:text-xl">
          Hi! My name is Jamielle Velasquez, a software developer with a passion
          for creating intuitive and attractive applications. I am currently a
          computer science undergraduate and am eager to apply my knowledge in
          the field. Whether I am working on a new application or diving into
          the latest video game, I am constantly pushing the boundaries of my
          knowledge and improving upon my skills.
          <br />
          <br />
          In my coursework, I have gained a strong foundation in computer
          science principles and have had the opportunity to build a variety of
          software. These include full-stack websites, mobile applications, and
          AI research. The languages that I use often are Python, Java, and
          Javascript. I also have experience with frameworks such as React,
          Tailwind, Flutter, Scikit-Learn, and more.
          <br />
          <br />I am excited to begin my career in the tech industry and am
          eager to work with you!
        </body>
        <div className="flex flex-col">
          <div className="flex flex-row pt-8 justify-between text-2xl sm:text-4xl">
            <SiJavascript />
            <SiJava />
            <SiHtml5 />
            <SiCss3 />
            <SiAdobexd />
            <SiReact />
            <SiPython />
          </div>
          <a
            className="flex flex-row gap-x-2 text-2xl sm:text-4xl my-8"
            href="https://drive.google.com/uc?export=download&id=13YzrLfO-81eCKjwPfyBgQtlYRqEKPelP"
            target="_blank"
          >
            Resume <MdDownload />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
