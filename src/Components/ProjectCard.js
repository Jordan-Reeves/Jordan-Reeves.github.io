import React from 'react';

export default function ProjectCard({project, notLast}) {
    if(notLast){ // not last = hr
        return (
            <li>
                <div className='flex flex-col md:flex-row py-8 px-5 justify-around'>
                    <a href={project.link} className="basis-1/2 self-center max-w-sm border-white border-4 p-3 mx-auto"><img src={project.image} alt="Quote Collector" /></a>
    
                    <div className="basis-1/2 self-center pl-5">
                        <h3 className="text-3xl text-center pb-5 ">{project.title}</h3>
                        <p className="text-md"> {project.description}</p>
                    </div>
                </div>
                <hr></hr>
            </li>
        )    
    }else{ // last = no hr
        return (
            <li>
                <div className='flex flex-col md:flex-row py-8 px-5 justify-around'>
                    <a href={project.link} className="basis-1/2 self-center max-w-sm border-white border-4 p-3 mx-auto"><img src={project.image} alt="Quote Collector" /></a>

                    <div className="basis-1/2 self-center pl-5">
                        <h3 className="text-3xl text-center pb-5 ">{project.title}</h3>
                        <p className="text-md"> {project.description}</p>
                    </div>
                </div>
            </li>

        )
    }
}