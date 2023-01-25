import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import picture from "./Assets/aboutme_picture2.jpg";
import { SiJavascript, SiJava, SiHtml5, SiCss3 , SiAdobexd, SiReact, SiPython} from "react-icons/si";
import { MdDownload } from "react-icons/md";
function About() {
  return (
    <div id="About">
      <Header />
      <div className="flex content-center h-screen p-32 py-48 gap-16">
        <img
          className="object-scale-down rounded-xl shadow-xl"
          src={picture}
        />
        <div className="flex flex-col justify-between">
          <body className="text-xl">
            Hi! My name is Jamielle Velasquez, a software developer with a
            passion for creating intuitive and attractive applications. I am
            currently a computer science undergraduate and am eager to apply my
            knowledge in the field. Whether I am working on a new application or
            diving into the latest video game, I am constantly pushing the
            boundaries of my knowledge and improving upon my skills.
            <br />
            <br />
            In my coursework, I have gained a strong foundation in computer
            science principles and have had the opportunity to build a variety
            of software. These include full-stack websites, mobile applications,
            and AI research. The languages that I use often are Python, Java,
            and Javascript. I also have experience with frameworks such as
            React, Tailwind, Flutter, Scikit-Learn, and more.
            <br />
            <br />I am excited to begin my career in the tech industry and am
            eager to work with you!
          </body>
          <div>
            <hr className="border opacity-25 mb-8" />
            <div className="flex flex-row justify-between text-4xl">
              <SiJavascript />
              <SiJava />
              <SiHtml5 />
              <SiCss3 />
              <SiAdobexd />
              <SiReact />
              <SiPython />
              <button className="flex flex-row">
                Resume <MdDownload />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
