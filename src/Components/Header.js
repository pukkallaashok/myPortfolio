import { Link } from "react-router-dom";
import logo from "../coding.png";

const Header = () => {
  return (
    <div className="bg-black mx-auto p-6 flex justify-between bg-gradient-to-tr from-stone-600 w-screen">
      <div className="flex w-[5%]">
        <img src={logo} />
      </div>
      <div className="flex flex-wrap m-4">
        <h4 className="text-gray-400 text-lg font-bold hover:text-white hover:underline underline-offset-8 m-2 hover:duration-1000">
          <Link to="/">Home</Link>
        </h4>
        <h4 className="text-gray-400 text-lg font-bold hover:text-white hover:underline underline-offset-8 m-2 hover:duration-1000">
          <Link to="/about">About</Link>
        </h4>
        <h4 className="text-gray-400 text-lg font-bold hover:text-white hover:underline underline-offset-8 m-2 hover:duration-1000">
          <Link to="/skill">Skills</Link>
        </h4>
        <h4 className="text-gray-400 text-lg font-bold hover:text-white hover:underline underline-offset-8 m-2 hover:duration-1000">
          <Link to="/projects">Experience & Projects</Link>
        </h4>
      </div>
    </div>
  );
};

export default Header;
