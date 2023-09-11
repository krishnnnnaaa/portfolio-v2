'use client';
import { GrFormClose } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import Draggable from 'react-draggable';
import Tool from "./Tool";
import { useContext, useEffect, useState } from "react";
import { stack } from "../stack";
import Loader from "./Loader";
import { AppStateContext } from "../appContext/appState";

export default function Tools(){
    const {setToggleTools, resizeTools, setResizeTools} = useContext(AppStateContext);
    const [stackData, setStackData] = useState([])
    const [toggleloader, setToggleloader] = useState(true)
    const [hoverToolsNav, setHoverToolsNav] = useState(false)
    useEffect(() => {
        setStackData(stack)
        setToggleloader(false)
    }, [])
    
    return(
        <Draggable handle=".nav" bounds={{bottom: 600}}>
        <div className={`bg-[#000000ab] h-[70vh] absolute z-[999] md:z-[1] transition-[width] border-[1px] border-[#ffffff33] flex-col rounded-xl items-center flex backdrop-blur-lg md:h-[570px] mx-auto mt-16 ${resizeTools ? 'w-[90%] md:w-[400px]' : 'w-4/5 xl:w-[950px]'}`}>
            <div onMouseEnter={()=> setHoverToolsNav(true)} onMouseLeave={()=> setHoverToolsNav(false)} className="nav hidden lg:flex py-5 text-black w-full pl-5">
                <div onClick={()=> {setToggleTools(false); setResizeTools(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverToolsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setToggleTools(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverToolsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setResizeTools(!resizeTools)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverToolsNav? 'block' : 'hidden'} text-sm`}/></div>
            </div>
            <div onMouseEnter={()=> setHoverToolsNav(true)} onMouseLeave={()=> setHoverToolsNav(false)} className="lg:hidden flex py-5 text-black w-full pl-5">
                <div onClick={()=> {setToggleTools(false); setResizeTools(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverToolsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setToggleTools(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverToolsNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setResizeTools(!resizeTools)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverToolsNav? 'block' : 'hidden'} text-sm`}/></div>
            </div>
            <div className="flex flex-col h-[inherit] overflow-y-hidden mt-4 w-full items-start px-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-medium">Tech workshop</h1>
                <p>Tools I use to craft cool shit</p>
            </div>
            <div className="flex flex-wrap mt-8 scrollbar overflow-y-scroll justify-around w-full">
                {
                    stackData && stackData.map(item => <Tool key={item.id} tech={item.image} techName={item.name}/>)
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