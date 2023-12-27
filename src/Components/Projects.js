import React from "react";
import Header from "./Header";
import foodApp from "../foodApp.png";
import movieBook from "../movieBook.png";
import progress from "../work-in-progress.png";
import videoBuff from "../videobuff.png";

const Projects = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="bg-black w-auto h-auto">
        <h1 className="p-10 text-6xl text-center text-white font-serif">
          My Experience
        </h1>

        <p className="text-white w-[60%] p-4 mx-72 border border-white">
          With two years of enriching experience as an{" "}
          <span className="font-bold">
            Associate System Engineer at Accenture
          </span>
          , I have been working as a frontend developer, specializing in React
          and a frequent learner. I was working on a ATT a Telecom domain
          product, I maintained the store .Successfully implemented new features
          and functionalities, ensuring the seamless performance of the ATT
          Store
        </p>
      </div>
      <div className="bg-black w-auto h-auto">
        <h1 className="p-10 text-6xl text-center text-white font-serif">
          My Projects
        </h1>
        <div className="p-10 flex justify-between my-4 align-middle">
          <div className="w-1/3 mx-2">
            <img src={foodApp} className="rounded-lg w-full object-cover" />
            <h1 className=" text-white my-6 text-3xl text-center font-sans font-semibold">
              Food App
            </h1>
            <ul className="text-white p-2">
              <li className="p-2">
                The app boasts a user-friendly and visually appealing interface
                created with React, ensuring a smooth and seamless user
                experience.
              </li>
              <li className="p-2">
                Secure user authentication is implemented, providing a
                personalized experience with user accounts.
              </li>
              <li className="p-2">
                A dynamic and responsive cart feature allows users to easily
                add, modify, or remove items. Real-time updates ensure a
                transparent and convenient shopping experience.
              </li>
            </ul>
            <button className="p-2 w-[60%] my-8 mx-16 bg-gray-400 ring-4 ring-white font-bold">
              <a
                href="https://main.d2sk3i81cumiai.amplifyapp.com/"
                target="_blank"
              >
                Demo
              </a>
            </button>
          </div>

          <div className="w-1/3 mx-2">
            <img
              src={movieBook}
              className="rounded-lg w-full object-scale-down"
            />
            <h1 className=" text-white my-6 text-3xl text-center font-sans font-semibold">
              Movie Book
            </h1>
            <ul className="text-white p-2">
              <li className="p-2">
                The app boasts a user-friendly and visually appealing interface
                created with React, ensuring a smooth and seamless user
                experience.
              </li>
              <li className="p-2">
                Secure user authentication is implemented, providing a
                personalized experience with user accounts.
              </li>
              <li className="p-2">
                Leveraging artificial intelligence, the app provides
                personalized movie recommendations based on user preferences
              </li>
            </ul>
            <button className="p-2 w-[60%] my-8 mx-16 bg-gray-400 ring-4 ring-white font-bold">
              <a
                href="https://main.d2dww6jg7v6cfj.amplifyapp.com/"
                target="_blank"
              >
                Demo
              </a>
            </button>
          </div>

          <div className="w-1/3 mx-2">
            <img
              src={videoBuff}
              className="rounded-lg w-full bg-white object-scale-down h-52"
            />
            <h1 className=" text-white my-6 text-3xl text-center font-sans font-semibold">
              VideoBuff
            </h1>
            <ul className="text-white p-2">
              <li className="p-2">
                The app boasts a user-friendly and visually appealing interface
                created with React, ensuring a smooth and seamless user
                experience.
              </li>
              <li className="p-2">
                Secure user authentication is implemented, providing a
                personalized experience with user accounts.
              </li>
              <li className="p-2">
                A dynamic and responsive cart feature allows users to easily
                add, modify, or remove items. Real-time updates ensure a
                transparent and convenient shopping experience.
              </li>
            </ul>
            <button className="p-2 w-[60%] my-8 mx-16 bg-gray-400 ring-4 ring-white font-bold">
              <a
                href="https://main.d2jarrvoat8r4o.amplifyapp.com/"
                target="_blank"
              >
                Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
