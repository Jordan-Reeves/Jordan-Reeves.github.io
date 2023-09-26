import React from 'react'
import ProjectCard from './ProjectCard'
import projects from "../data";


export default function ProjectsList() {

  const lastTitle = projects[projects.length-1].title;
  return (
    <div>
        <h3 id="projects" className="text-3xl text-center p-5 ">Projects</h3>
        <ul>
        {
          projects.map((p) =>
            <ProjectCard project={p} notLast={p.title !== lastTitle} key={p.title}/>
          )
        }
        </ul>
    </div>
  )
}
