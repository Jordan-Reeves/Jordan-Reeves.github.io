import React from 'react';
import selfImage from "../media/Good_Pic.JPG"

export default function Header() {
  return (
    <>
      <div id="aboutMe" className='text-center pb-5'>
        <h2 className="text-4xl">Jordan Reeves</h2>
        <p>CREATIVE AND READY FOR A CHALLENGE</p>
      </div>

      <hr></hr>
      <div className='flex flex-col md:flex-row py-8 px-5 justify-between'>
        <img src={selfImage} alt="Jordan Reeves" className='basis-1/2 self-center max-w-[200px] max-h-[300px] mx-auto w-auto h-auto'/>
        <div id="aboutMe"className='basis-1/2 self-center pl-5'>
          <h3 className='text-3xl text-center pb-5'>About Me</h3>
          <p id="description" className='text-md'>A diligent and organized 4th year New Media Interactive Development major at RIT looking to begin full time employment starting May/June 2024. Proficient in an array of programming languages including JavaScript, HTML, CSS, C#, Unity, Node, and React. Possesses a keen understanding of user data visualization, experience design, application prototyping, user flows, user research, and user testing. Interested in creating interactive user experiences that help enhance everyday life.</p>
        </div>
      </div>
      <hr></hr>

    </>
  );
}



