import quoteCollector from "./media/QuoteCollector.png";
import digitalTheremin from "./media/DigitalTheremin.png";
import animeFinder from "./media/AnimeFinder.png";
import horseRun from "./media/HorseRun.png";
import censusVisualization from "./media/CensusVisualizationCopy.png";
import endangeredSpecies from "./media/EndangeredSpeciesViz.png";
import undrawing from "./media/UndrawingMachine.png";

const projects = [
    {
        title: "Undrawing Machine",
        description: "I created this project my Senior year in my current topics class. The assignment was to create a program that expanded, augmented, and questions the act of drawing. I decided to create a program that allows the user to draw custom phyllotaxis with their voice. The color and size of the dots were determined by the pitch and volume of the users' voice. For this project I utilized p5.js, HTML, CSS, JavaScript, and the p5.sound library. Fun fact: This phyllotaxis was created by singing 'Amazing Grace'.",
        
        link: "https://jordanreeves480.wordpress.com/2023/10/07/jordan-reeves-deliverables-4b/",
        image: undrawing,
    },
    {
        title: "Endangered Species in the National Parks",
        description: "I created this project my Junior year in my Data viszualization class. The assignment was to create a compelling interactive data visualization that allowed the user explore the data while demonstrating our mastery of D3.js. This visualization allows the user to explore the number of endangered species in the National Parks. The user is able to select indivudaul national parks and see the number of endangered species in each park. For this project I utilized D3.js, HTML, CSS, JavaScript, JSON objects, and fetch(). Additionally, I applied concepts of data visualization such as channels, markers, voroni diagrams, and choropleths.",
        link: "https://observablehq.com/d/f91eb39a33faa533",
        image: endangeredSpecies,
    },
    {
        title: "Digital Theremin",
        description: "I created this project my sophomore year in Rich Media Web App I. The assignment was to create a compelling interactive media experience that allows the user to explore a media-related theme and I chose an audio visualizer. The goal of the project was for us to demonstrate our mastery of HTML5/CSS/JS/Canvas. This application tracks the position of the users' nose and wrists to change the pitch, volume, and visualization. The user can also change the visualization by choosing a preset or by changing the color or shapes displayed. For this project I utilized HTML, CSS, JavaScript, Canvas, ml5 PoseNet, JSON objects, fetch(), Bulma, and Web Components.",
        link: "https://people.rit.edu/jar5927/330/project-2/home.html",
        image: digitalTheremin,
    },
    {
        title: "Quote Collector",
        description: "I created this project my sophomore year in Rich Media Web App I. The assignment for this project was to create a JavaScript driven Web application that utilizes a Web service. The goal was to create an application that is easy to use, functional, and aesthetically pleasing. This application allows users to favorite quotes and includes a community page where they can see what other people have liked and add them to their own quote collection. I chose to utilize the Quotable API for this assignment. I used HTML, CSS, JavaScript, Bulma, Firebase, Local storage, and Web Components in this project.",
        link: "https://people.rit.edu/jar5927/330/project-1/home.html",
        image: quoteCollector,
    },
    // {
    //     title: "Anime Finder",
    //     description: "I created this project my sophomore year in Introduction to Web Technology for Game Developers. The assignment for this project was to create a JavaScript driven Web application that utilizes a Web service. The goal was to create an application that is easy to use, functional, and aesthetically pleasing. I chose to utilize the Jikan API for this assignment. I used HTML, CSS, and JavaScript in this project.",
    //     link: "https://people.rit.edu/jar5927/235/project2/project2.html",
    //     image: animeFinder,
    // },
    // {
    //     title: "Horse Run",
    //     description: "This project was created my sophomore year in Introduction to Web Technology for Game Developers. The assignment was to create a JavaScript game that utilized PixiJS. For this project I created a game called Horse Run. The player plays as a horse and jumps over logs, dodges flies, and collects carrots. The goal is to run for as long as possible while collecting as many carrots (points) as you can. I used PIXI.js, HTML, CSS, JavaScript, and Photoshop to complete this project.",
    //     link: "https://people.rit.edu/jar5927/235/project3/game.html",
    //     image: horseRun,
    // },
    // {
    //     title: "Census Visualization",
    //     description: "I made this project my freshman year in New Media Interactive Design and Algorithmic Problem Solving II. The assignment was to create a program that visualizes census data of at least 4 aspects of the U.S. utilizing JSON objects and OOP. I used JavaScript, P5.js, and Photoshop to complete this project. Note: You will have to zoom out to around 33% to see the whole screen.",
    //     link: "https://people.rit.edu/jar5927/CensusVisualization/index.html",
    //     image: censusVisualization,
    // },
]

export default projects;