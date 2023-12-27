import React from "react";
import Header from "./Header";
import HTML from "../html.png";
import CSS from "../css3.png";
import JS from "../javascript (1).png";
import orcale from "../oracle.png";
import react from "../react.png";
import vscode from "../vscode.png";
import github from "../github.png";

const Skills = () => {
  return (
    <div>
      <Header />
      <div className="bg-black w-screen h-auto">
        <h1 className="p-4 text-6xl text-center text-white font-serif">
          Skills
        </h1>
        <p className="text-white text-center p-4 font-semibold text-2xl">
          I love to learn new things and experiment with new technologies.
          <br /> These are some of the major languages, technologies, tools and
          platforms I have worked with:
        </p>
        <h1 className="text-white text-center p-2 font-bold text-3xl underline underline-offset-8 m-4">
          Languages & Databases
        </h1>
        <div className="flex justify-center">
          <img src={HTML} className="w-1/12 p-4 m-2" />
          <img src={CSS} className="w-1/12 p-4 m-2" />
          <img src={JS} className="w-1/12 p-4 m-2" />
          <img
            src={orcale}
            className="w-1/12 p-4 h-24 mx-4 my-6 bg-white rounded-2xl "
          />
        </div>
        <h1 className="text-white text-center p-2 font-bold text-3xl underline underline-offset-8 m-4">
          Libraries
        </h1>
        <div className="flex justify-center">
          <img src={react} className="w-[8%] p-4 m-2" />
        </div>
        <h1 className="text-white text-center p-2 font-bold text-3xl underline underline-offset-8 m-4">
          Tools & Platforms
        </h1>
        <div className="flex justify-center">
          <img src={vscode} className="w-[8%] p-4 m-2" />
          <img src={github} className="w-[8%] p-4 m-2 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
