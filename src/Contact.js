import "./index.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      id="Contact"
      className="h-screen text-white bg-black text-center flex flex-col flex-wrap justify-center"
    >
      <header className="Header absolute top-0 flex flex-row justify-center sm:justify-between items-center px-8 sm:px-16 xl:px-32 py-8" style={{width: "99vw"}}>
      <Link className="hidden sm:block" to="/">
        <h1 className="font-black text-4xl -tracking-widest">JV</h1>
      </Link>
      <nav className="space-x-12 sm:space-x-20 text-md sm:text-xl">
        <Link to="/#Projects">projects</Link>
        <Link to="/About">about</Link>
        <Link to="/Contact">contact</Link>
      </nav>
    </header>
     

      <h2 className="text-md sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl">Send me an email:</h2>
      <h1 className="text-xl sm:text-4xl md:test-6xl lg:text-7xl 2xl:text-8xl underline font-medium">
        jamiellevelasquez@gmail.com
      </h1>
    </div>
  );
}

export default Contact;
