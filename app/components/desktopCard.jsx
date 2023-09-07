'use client'
import Image from "next/image";
import { AppStateContext } from "../appContext/appState";
import { useContext, useEffect } from "react";
import defaultBg from '../assets/wallpapers/12.jpg'

export default function DesktopCard({image}){
    const {desktopBg, setDesktopBg} = useContext(AppStateContext);
    return(
            <Image alt="desktopWallpaper" src={image} className="w-32 rounded-lg hover:scale-110 transition-all cursor-pointer h-[90px] m-2" onClick={()=> setDesktopBg(image)}/>
    )
}