'use client'
import Image from "next/image";
import developer from '../assets/developer.png'
import {GrFormClose } from 'react-icons/gr'
import {MdMinimize } from 'react-icons/md'
import {IoMdResize } from 'react-icons/io'
import { useContext, useState } from "react";
import Draggable from "react-draggable";
import { AppStateContext } from "../appContext/appState";

export default function About(){
    const [hoverAboutNav, setHoverAboutNav] = useState(false)

    // About window resize functionality
    const { setToggleAbout, setResizeAbout, resizeAbout } = useContext(AppStateContext)
    return(
        <Draggable handle=".nav" bounds={{bottom: 600}}>
        <div className={`bg-[#000000ab] absolute transition-[width] duration-700 border-[1px] border-[#ffffff33] flex-col rounded-xl items-center flex backdrop-blur-lg mx-auto mt-16 ${resizeAbout ? 'w-11/12 md:w-1/3 h-auto' : 'w-4/5 h-fit xl:h-[70vh]'}`}>
            <div onMouseEnter={()=> setHoverAboutNav(true)} onMouseLeave={()=> setHoverAboutNav(false)} className="nav flex py-5 text-black w-full pl-5">
                <div onClick={()=> {setToggleAbout(false); setResizeAbout(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverAboutNav? 'block' : 'hidden'} text-sm`}/></div>
                <div onClick={()=> setToggleAbout(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverAboutNav? 'block' : 'hidden'} -mt-0.5`}/></div>
                <div onClick={()=> setResizeAbout(!resizeAbout)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverAboutNav? 'block' : 'hidden'} text-xs`}/></div>
            </div>
            <div className="flex h-[inherit] items-center">
            <div className={`${resizeAbout ? 'flex-col-reverse' : 'md:flex-row flex-col-reverse'} flex justify-center`}>
                <div className={`${resizeAbout ? 'w-full' : 'w-full xl:w-3/4'} xl:px-8 px-4 py-6`}>
                    <h1 className={`font-medium mb-4 xl:my-4 ${resizeAbout ? 'text-3xl':'text-3xl md:text-6xl'}`}>Hey, I&apos;m Krishna!</h1>
                    <p className={`my-2 ${resizeAbout ? 'text-xl' : '`md:text-4xl text-xl'}`}>Creating seamless user experiences with frontend magic.</p>
                    <p className={`${resizeAbout && 'text-sm my-2'}my-8 text-xs xl:text-xl text-[#a5a5a5]`}>I specialize in crafting elegent frontend solutions, blending minimalistic design with seamless functionality to create captivating user experiences</p>
                    <span className={`text-[#a5a5a5] flex items-center my-2 xl:my-8 text-sm ${resizeAbout && 'text-sm my-4'}`}><div className="h-2 w-2 mr-2 rounded-lg animate-pulse shadow-[0_0_7px_2px_rgba(34,87,238,1)] bg-[#2257ee]"></div> Available for new opportunities</span>
                </div>
                <div className={`mx-auto block md:mt-12 relative ${resizeAbout ? 'h-48 w-48' : 'md:w-80 md:h-80 w-48 h-48'}`}>
                    <Image src={developer} alt="developer" fill={true} className="h-full w-full"/>
                </div>
            </div>
            </div>
        </div>
        </Draggable>
    )
}