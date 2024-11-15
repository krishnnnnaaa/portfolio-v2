'use client'
import Image from "next/image";
import { AppStateContext } from "../appContext/appState";
import { useContext } from "react";

export default function DesktopCard({image}){
    const {setDesktopBg} = useContext(AppStateContext);
    return(
            <Image alt="desktopWallpaper" src={image} className="w-32 rounded-lg hover:scale-110 transition-all  h-[90px] m-2" onClick={()=> setDesktopBg(image)}/>
    )
}