'use client'

import Draggable from "react-draggable";
import { GrFormClose } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../appContext/appState";
import Project from "./Project";
import { work } from "../work";
import Loader from "./Loader";


export default function Projects(){
    const {setToggleProjects, resizeProjects, setResizeProjects} = useContext(AppStateContext);
    const [hoverProjectsNav, setHoverProjectsNav] = useState(false)
    const [toggleloader, setToggleloader] = useState(true)
    const [projectData, setProjectData] = useState([])
    
    useEffect(() => {
        setProjectData(work)
        setToggleloader(false)
    }, [])
    return(
        <Draggable handle=".nav" bounds={{bottom: 600}}>
        <div className={`bg-[#000000ab] h-[70vh] absolute transition-[width] border-[1px] border-[#ffffff33] flex-col rounded-xl items-center flex backdrop-blur-lg md:h-[570px] mx-auto mt-16 ${resizeProjects ? 'w-11/12 md:w-[400px]' : 'w-4/5 xl:w-[950px]'}`}>
            <div onMouseEnter={()=> setHoverProjectsNav(true)} onMouseLeave={()=> setHoverProjectsNav(false)} className="nav hidden lg:flex py-5 text-black w-full pl-5">
                <div onClick={()=> {setToggleProjects(false); setResizeProjects(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverProjectsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=>setToggleProjects(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverProjectsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setResizeProjects(!resizeProjects)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverProjectsNav? 'block' : 'hidden'} text-sm`}/></div>
            </div>
            <div onMouseEnter={()=> setHoverProjectsNav(true)} onMouseLeave={()=> setHoverProjectsNav(false)} className="lg:hidden flex py-5 text-black w-full pl-5">
                <div onClick={()=> {setToggleProjects(false); setResizeProjects(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverProjectsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=>setToggleProjects(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverProjectsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setResizeProjects(!resizeProjects)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverProjectsNav? 'block' : 'hidden'} text-sm`}/></div>
            </div>
            <div className="flex flex-col h-[inherit] overflow-y-hidden mt-4 w-full items-start px-4 md:px-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-medium">Proof Of Work</h1>
                <p>Projects I have crafted</p>
            </div>
            <div className="py-10 flex scrollbar overflow-y-scroll flex-wrap justify-center w-full">
               {
                projectData && projectData.map(item => <Project key={item.id} code={item.code_link} demo={item.demo_link} image={item.image} project={item.project} description={item.description}/>)
               }
               {
                    toggleloader && <Loader/>
                }
            </div>
            </div>
        </div>
        </Draggable>
    )
}