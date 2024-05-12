
import './App.css'
import NAV from './components/nav'
import Home from './components/home'
import SobreMi from './components/sobre-mi'
import Proyectos from './components/proyectos'
import Skill from './components/skill'
// import space from "./images/space.jpg"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <NAV />

      <Routes>
        
          <Route  path="/" Component={Home} />
          <Route  path="/sobre-mi" Component={SobreMi} />
          <Route path="/proyectos"  Component={Proyectos}/>
          <Route  path="/skill" Component={Skill} />
          
            
        </Routes>
  
      
      
    </div>
  )
}

export default App
