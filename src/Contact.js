import "./index.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      id="Contact"
      className="h-screen text-white bg-black text-center flex flex-col flex-wrap justify-center"
    >
      <header className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-16 py-8 bg-black">
        <Link to="/">
          <h1 className="font-black text-4xl -tracking-widest">JV</h1>
        </Link>
        <nav className="space-x-20 text-xl">
          <Link to="/">projects</Link>
          <Link to="/About">about</Link>
          <Link to="/Contact">contact</Link>
        </nav>
      </header>

      <h2 className="text-3xl">Send me an email:</h2>
      <h1 className="text-9xl underline font-medium">
        jamiellevelasquez@gmail.com
      </h1>
    </div>
  );
}

export default Contact;
