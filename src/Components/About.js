import React from "react";
import Header from "./Header";
import devimg from "../devimg2.png";

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-black w-screen h-auto flex justify-between">
        <div className="w-1/3">
          <img src={devimg} className="py-56 pl-10" />
        </div>
        <div className="text-white w-2/3 pl-44 m-4">
          <h1 className="text-white text-7xl pl-32 font-serif py-20">
            About Me!!
          </h1>
          <p className="grid grid-cols-1 py-6 font-semibold">
            I am Ashok Kumar Pukkalla, a driven professional with a fervent
            passion for front-end development, boasting two years of dedicated
            experience in the field. My journey in the tech industry has been
            characterized by a relentless pursuit of creating visually
            captivating and highly functional user interfaces that leave a
            lasting impact.
          </p>
          <p className="grid grid-cols-1 py-2 font-semibold">
            Front-end development is more than just a career for me; it's a
            canvas where creativity meets functionality. I find immense
            satisfaction in crafting intuitive and aesthetically pleasing user
            interfaces, where every line of code contributes to an engaging
            digital experience. This passion fuels my determination to stay at
            the forefront of emerging technologies and design trends.
          </p>
          <p className="grid grid-cols-1 py-2 font-semibold">
            My professional aspirations center around elevating user experiences
            to new heights. I envision myself leading innovative projects that
            redefine how users interact with digital platforms. I am driven by
            the desire to create seamless, user-centric designs that transcend
            the ordinary, setting new standards in front-end development.
          </p>
          <p className="grid grid-cols-1 py-2 font-semibold">
            Hobbies:
            <br />
            I'm an avid reader, constantly exploring new worlds and ideas
            through books. Reading not only broadens my horizons but also fuels
            my creativity.
            <br />
            Staying active and healthy is a core part of my lifestyle. I enjoy a
            variety of activities, from gym workouts to outdoor adventures, to
            maintain physical and mental well-being.
            <br />
            The kitchen is my canvas for culinary experimentation. I love to
            cook and experiment with different cuisines, flavors, and
            techniques, turning each meal into a creative endeavor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
