'use client'
import Draggable from "react-draggable";
import { GrFormClose } from "react-icons/gr";
import { MdMinimize } from "react-icons/md";
import { AppStateContext } from "../appContext/appState";
import { useContext, useState, useEffect } from "react";
import { wallpapers } from "../desktopBackground";
import DesktopCard from "./desktopCard";
import Loader from "./Loader";

export default function DesktopBackground(){
    const [hoverDesktopBackgroundNav, setHoverDesktopBackgroundNav] = useState(false)
    const [desktopBackground, setDesktopBackground] = useState([])
    const [toggleloader, setToggleloader] = useState(true)
    const {setToggleDesktopBackground, desktopBg} = useContext(AppStateContext);

    useEffect(() => {
        setToggleloader(true)
      setDesktopBackground(wallpapers)
      setToggleloader(false)
    })
    useEffect(() => {
        if(desktopBg){
            document.body.style = `background: url(${desktopBg?.src}); background-repeat: no-repeat; background-size: cover; object-fit: cover; height: 100vh;`
        }
    }, [desktopBg])
    
    
    return(
        <Draggable handle=".nav" bounds={{bottom: 600}}>
        <div className={`bg-[#000000ab] h-[70vh] hidden w-[700px] absolute transition-[width] border-[1px] border-[#ffffff33] flex-col rounded-xl items-center md:flex backdrop-blur-lg md:h-[570px] mx-auto mt-16`}>
            <div onMouseEnter={()=> setHoverDesktopBackgroundNav(true)} onMouseLeave={()=> setHoverDesktopBackgroundNav(false)} className="nav flex py-5 text-black w-full pl-5">
                <div onClick={()=> setToggleDesktopBackground(false)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverDesktopBackgroundNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setToggleDesktopBackground(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverDesktopBackgroundNav? 'block' : 'hidden'} text-sm`}/></div>
            </div>
            <div className="flex flex-col h-[inherit] overflow-y-hidden mt-4 w-full items-start px-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-medium">Desktop Backgrounds</h1>
            </div>
            <div className="flex flex-wrap mt-8 scrollbar overflow-y-scroll justify-around w-full">
                {
                    desktopBackground && desktopBackground.map(item => <DesktopCard key={item.id} image={item.image} />)
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