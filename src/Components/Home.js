import React from "react";
import Header from "./Header";
import profile from "../Portfoli.jpg";
import gitlogo from "../github-mark-white.png";
import LinkedInlogo from "../linked-in.jpg";
import gmaillogo from "../gmail_icon-icons.com_59877.png";
import instalogo from "../instalogo.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-black w-screen h-auto flex justify-between ">
        <div className="pt-20 m-10 pl-80">
          <h1 className="text-white text-8xl font-serif">Ashok Kumar</h1>
          <h3 className="text-white pl-10 m-6 text-4xl">
            I'm a Front-End Developer
          </h3>
          <div className="m-6 pt-40 flex flex-wrap justify-between">
            <a href="https://github.com/dashboard" target="_blank">
              <img src={gitlogo} className="w-16" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-kumar-554477223/"
              target="_blank"
            >
              <img src={LinkedInlogo} className="bg-white w-16 rounded-lg" />
            </a>
            <a href="mailto:meherashok98@gmail.com" target="_blank">
              <img src={gmaillogo} className=" w-20 rounded-xl" />
            </a>
            <a href="https://www.instagram.com/ashok_98__/" target="_blank">
              <img src={instalogo} className=" w-20 rounded-lg" />
            </a>
          </div>
        </div>
        <div className="w-1/4 p-10 m-4 my-20 ">
          <img
            src={profile}
            alt="profile"
            className="rounded-xl shadow-lg shadow-gray-400 ring-4 ring-amber-800 ring-offset-8 ring-offset-slate-70 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
