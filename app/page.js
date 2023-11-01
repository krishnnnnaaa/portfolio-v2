'use client'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import About from './components/About'
import Tools from './components/Tools'
import { useContext, useState } from 'react'
import { AppStateContext } from './appContext/appState'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContextMenu from './components/ContextMenu'
import DesktopBackground from './components/DesktopBackground'

export default function Home() {
  const [toggleContext, setToggleContext] = useState({status: false, x: 0, y: 0})
  const {toggleAbout, toggleTools, toggleProjects, toggleContact, toggleDesktopBackground } = useContext(AppStateContext);
  const contextMenu =(e) => {
    if(e){
      e.preventDefault();
    }
    setToggleContext({status: true, x: e.clientX, y: e.clientY});
  }
  
  return (
   <div onContextMenu={contextMenu} className='overflow-hidden text-white h-screen flex justify-center md:block'>
    <Navbar/>
    { toggleAbout && <About/> }
    { toggleTools && <Tools/> }
    { toggleDesktopBackground && <DesktopBackground/> }
    { toggleContext.status && <ContextMenu context={toggleContext} setToggleContext={setToggleContext}/>}
    { toggleProjects && <Projects/>}
    { toggleContact && <Contact/>}
    <Menu/>
   </div>
  )
}
