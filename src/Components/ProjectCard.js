import React from 'react';
import projectImg from "../images/QuoteCollector.png";
import styles from "./ProjectCard.css";

export default function ProjectCard() {
    return (
        <>
            <div className='flex flex-col md:flex-row py-8 px-5 justify-around'>
                <a href="https://people.rit.edu/jar5927/330/project-1/home.html" className="basis-1/2 self-center max-w-sm border-white border-4 p-3"><img src={projectImg} alt="Quote Collector" /></a>

                <div className="basis-1/2 self-center">
                    <h3 className="text-3xl text-center pb-5 ">Quote Collector</h3>
                    <p className="">I created this project my sophomore year in Rich Media Web App I. The assignment for this project was to create a JavaScript driven Web application that utilizes a Web service. The goal was to create an application that is easy to use, functional, and aesthetically pleasing. Additionally, this application allows users to favorite quotes and includes a community page where they can see what other people have liked and add them to their own quote collection. I chose to utilize the Quotable API for this assignment. I used HTML, CSS, JavaScript, Bulma, Firebase, Local storage, and Web Components in this project.</p>
                </div>
            </div>
            <hr></hr>
        </>

    )
}
