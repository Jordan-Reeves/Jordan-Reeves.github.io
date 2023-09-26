import React from 'react';
import selfImage from "../media/Good_Pic.JPG"
// import 

export default function Header() {
  return (
    <>
      <div id="aboutMe" className='text-center pb-5'>
        <h2 className="text-4xl">Jordan Reeves</h2>
        <p>CREATIVE AND READY FOR A CHALLENGE</p>
      </div>

      <hr></hr>
      <div className='flex flex-col md:flex-row py-8 px-5 justify-between'>
        <img src={selfImage} alt="Jordan Reeves" className='basis-1/2 self-center max-w-[200px] mx-auto w-auto h-auto'/>
        <div id="aboutMe"className='basis-1/2 self-center pl-5'>
          <h3 className='text-3xl text-center pb-5'>About Me</h3>
          <p id="description" className='text-md'>Organized hard working 4th year New Media Interactive Development major at RIT. Interested in creating an interactive user experience that helps enhance everyday life. Looking for a full time position begining May 2024.</p>
        </div>
      </div>
      <hr></hr>

    </>
  );
}



