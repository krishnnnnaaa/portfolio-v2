'use client'

import { useContext } from "react"
import { AppStateContext } from "../appContext/appState";
export default function ContextMenu({context, setToggleContext}){
    const {setToggleDesktopBackground} = useContext(AppStateContext);
    document.addEventListener('click', (e)=>{
        if(e.target.id !== 'contextMenu'){
            setToggleContext({status: false}) 
        }
    })


      function handleDesktopBackground(){
          setToggleDesktopBackground(true)
          setToggleContext({status: false}) 
        }
    return(
        <div  style={{top: context.y + "px", left: context.x + "px"}} id="contextMenu" className="w-60 shadow-[0_0_10px_3px_rgba(0,0,0,0.32)] transition-all text-sm px-[5px] py-[10px] bg-[#cecece4d] backdrop-blur-sm rounded-[10px] lg:relative absolute">
            <ul>
                <li className="my-2 pl-3 cursor- rounded-md py-[3px] hover:bg-[#007ff7] context">New folder</li>
                <li className="my-2 pl-3 rounded-md py-[3px] hover:bg-[#007ff7] context">Get info</li>
                <li onClick={handleDesktopBackground} className="my-2 pl-3 rounded-md py-[3px] hover:bg-[#007ff7] context">Change Desktop Background</li>
                <li className="my-2 pl-3 rounded-md py-[3px] hover:bg-[#007ff7] context">Sort By</li>
                <li className="my-2 pl-3 rounded-md py-[3px] hover:bg-[#007ff7] context">Show view option</li>
            </ul>
        </div>
    )
}