import React from "react";
import meImg from "../media/IMG_9534.jpg";

export default function Intro() {
  return (
    <>
      <div id="aboutMe" className="text-center pb-5">
        <h2 className="text-4xl">Jordan Reeves</h2>
        <p>Front-End Developer Crafting Engaging Web Experiences</p>
      </div>

      <hr></hr>
      <div className="flex flex-col md:flex-row py-8 px-5 justify-between">
        <img
          src={meImg}
          alt="Jordan Reeves"
          className="basis-1/2 self-center max-w-[200px] max-h-[300px] mx-auto w-auto h-auto"
        />
        <div id="aboutMe" className="basis-1/2 self-center pl-5">
          <h3 className="text-3xl text-center pb-5">About Me</h3>
          <p id="description" className="text-md">
            I specialize in front-end web development and experience design,
            with a strong foundation in programming, design, and user
            experience. As a recent <i>summa cum laude</i> graduate from Rochester
            Institute of Technology with a degree in New Media Interactive
            Development, I am proficient in JavaScript, HTML, CSS, and React.js,
            with additional experience in C# and Unity. My expertise includes
            creating engaging user experiences through data visualizations,
            prototyping, user flows, and comprehensive user research and
            testing. I am passionate about building interactive, user-centered
            web applications that enhance everyday life.
          </p>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
