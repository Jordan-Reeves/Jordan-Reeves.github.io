import React from "react";

export default function Skills() {
  return (
    <>
      <div id="skills">
        <h3 className="text-3xl text-center p-5 pb-0">Skills</h3>
        <div className="flex flex-col md:flex-row py-8 px-5 justify-evenly">
          <div>
            <h3 className="text-3xl text-center pb-5">Programming</h3>
            <ul className='list-disc pl-5'>
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Unity</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl text-center pb-5">Software</h3>
            <ul className='list-disc pl-5'>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Axure RP 10</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </div>

      <hr></hr>
    </>
  );
}
