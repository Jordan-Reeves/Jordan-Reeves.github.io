import './App.css';
import Header from "./Components/Header";
import Nav from './Components/Nav';
import ProjectCard from './Components/ProjectCard';

function App() {
  return (
    <div>
      <Nav />
      <div className='p-10 max-w-7xl m-auto pt-16'>
        <Header />
        <h3 className="text-3xl text-center p-5 ">Projects</h3>
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
