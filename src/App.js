import "./App.scss";
import { Routes, Route} from 'react-router-dom'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import Contact from './containers/contact';
import Project from './containers/project';
import Skills from './containers/skills';
import Resume from './containers/resume';
import About from './containers/about';
import Dreams from './containers/dreams';
import Navbar from './components/navBar';
import Theme from "./components/theme";
import particlesConfig from "./helpers/particlesConfig";
function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
     
     <Particles
          id="particles"
          options={particlesConfig}
          init={particlesInit}
        />
  
     <div className="App__navbar-wrapper">
     <Navbar/>
     </div>
    
     <div className="App__main-content-wrapper">
     <Theme />
<Routes>
  <Route index path ="/" element={<Home/>} />
<Route path ="/about" element={<About/>}/>
<Route path ="/resume" element={<Resume/>}/>
<Route path ="/skills" element={<Skills/>}/>
<Route path ="/contact" element={<Contact/>}/>
<Route path ="/project" element={<Project/>}/>
<Route path ="/dreams" element={<Dreams/>}/>
</Routes>
    </div>
    </div>
  );
}

export default App;
