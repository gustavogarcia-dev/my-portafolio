
import './App.css'
import { Route, Routes } from 'react-router-dom';

import NAV from './components/nav'
import Home from './components/home'
import SobreMi from './components/sobre-mi'
import Proyectos from './components/proyectos'
import Skill from './components/skill'
// import space from "./images/space.jpg"

function App() {

  return (


    <div>
      <NAV />
          <Routes>
            
              <Route  path="/" element={<Home/>} />
              <Route  path="/sobre-mi" element={<SobreMi/>} />
              <Route path="/proyectos"  element={<Proyectos/>}/>
              <Route  path="/skill" element={<Skill/>} />
              
                
            </Routes>
      
      
    </div>

  )
}

export default App
