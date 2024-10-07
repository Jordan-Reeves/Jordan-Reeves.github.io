import './App.css';
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Nav from './Components/Nav';
import ProjectList from './Components/ProjectsList';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Nav />
      <div className='p-10 max-w-7xl m-auto pt-16'>
        <Intro />
        <Skills />
        <ProjectList />
      </div>
      <Footer />
    </>
  );
}

export default App;
