import './App.css';
import Header from "./Components/Header";
import Nav from './Components/Nav';
// import ProjectCard from './Components/ProjectCard';
import ProjectList from './Components/ProjectsList';

function App() {
  return (
    <>
      <Nav />
      <div className='p-10 max-w-7xl m-auto pt-16'>
        <Header />
        <ProjectList />
      </div>
    </>
  );
}

export default App;
