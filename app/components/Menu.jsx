'use client'
import Image from "next/image";
import about from '../assets/about.png'
import contact from '../assets/contact.png'
import experience from '../assets/experience.png'
import projects from '../assets/projects.png'
import skills from '../assets/skills.png'
import { useContext } from "react";
import { AppStateContext } from "../appContext/appState";

export default function Menu(){
    const {setToggleAbout, setToggleTools, setToggleProjects, setToggleContact } = useContext(AppStateContext);
    return(
        <div className="flex w-full fixed md:z-[99999] bottom-7 justify-center">
        <div className="flex w-full md:w-fit fixed bottom-0 md:bottom-7 shadow-[0_0_15px_3px_rgba(0,0,0,0.75)] backdrop-blur-sm items-center py-4 justify-center md:border-2 border-gray-600 md:rounded-xl mx-auto">
            <div onClick={()=> setToggleAbout(true)} className="h-12 md:h-10 w-12 md:w-10 cursor-pointer transition-all hover:scale-150 relative mr-7 ml-3 md:mx-4">
                <Image alt="about" src={about} fill={true} className="h-full w-full"/>
            </div>
            <div onClick={()=> setToggleTools(true)} className="h-12 md:h-10 w-12 md:w-10 cursor-pointer transition-all hover:scale-150 relative mr-7 ml-3 md:mx-4">
                <Image alt="skills" src={skills} fill={true} className="h-full w-full"/>
            </div>
            {/* <div className="h-8 md:h-10 w-8 md:w-10 cursor-pointer transition-all hover:scale-150 relative mx-3 md:mx-4">
                <Image src={experience} fill={true} className="h-full w-full"/>
            </div> */}
            <div onClick={()=> setToggleProjects(true)} className="h-12 md:h-10 w-12 md:w-10 cursor-pointer transition-all hover:scale-150 relative mr-7 ml-3 md:mx-4">
                <Image alt="projects" src={projects} fill={true} className="h-full w-full"/>
            </div>
            <div onClick={()=> setToggleContact(true)} className="h-12 md:h-10 w-12 md:w-10 cursor-pointer transition-all hover:scale-150 relative mr-7 ml-3 md:mx-4">
                <Image alt="contact" src={contact} fill={true} className="h-full w-full"/>
            </div>
        </div>
        </div>
    )
}