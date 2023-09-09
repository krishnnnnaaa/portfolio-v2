'use client'
import Draggable from "react-draggable";
import { AppStateContext } from "../appContext/appState";
import { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { IoMdResize } from "react-icons/io";
import { MdMinimize } from "react-icons/md";
import Script from "next/script";

export default function Contact(){
    const [hoverContactNav, setHoverContactNav] = useState(false)
    const { setToggleContact, setResizeContact, resizeContact, setMessageData, messageData} = useContext(AppStateContext)

    const messageMe = (e) => {
        e.preventDefault()
        setMessageData({
            name: e.target[0].value,
            message: e.target[1].value
        })

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "gupta.krishnalko111@gmail.com",
            Password : "4235F35C03D32A28DDB2AF733B31EFCD5C61",
            To : 'gupta.krishnalko111@gmail.com',
            From : 'gupta.krishnalko111@gmail.com',
            Subject : "Message from your portfolio",
            Body : `Hello Krishna!, ${e.target[0].value} has sent you a DM. Message is: ${e.target[1].value}`
        }).then(
          message => alert(message)
        );
    }
    return(
        <>
        <Script type="text/javascript" async defer src="https://smtpjs.com/v3/smtp.js"></Script>
        <Draggable handle=".nav" bounds={{bottom: 600}}>
        <div className={`bg-[#000000ab] absolute transition-[width] duration-700 border-[1px] border-[#ffffff33] flex-col rounded-xl items-center flex backdrop-blur-lg mx-auto mt-16 ${resizeContact ? 'w-11/12 md:w-1/3 h-auto' : 'w-[350px] h-fit xl:h-auto'}`}>
            <div onMouseEnter={()=> setHoverContactNav(true)} onMouseLeave={()=> setHoverContactNav(false)} className="nav hidden lg:flex py-5 text-black w-full pl-5">

                <button onClick={()=> {setToggleContact(false); setResizeContact(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverContactNav? 'block' : 'hidden'} text-sm`}/></button>
                <div onClick={()=> setToggleContact(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverContactNav? 'block' : 'hidden'} -mt-0.5`}/></div>
                <div onClick={()=> setResizeContact(!resizeContact)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverContactNav? 'block' : 'hidden'} text-xs`}/></div>
            </div>
            <div onMouseEnter={()=> setHoverContactNav(true)} onMouseLeave={()=> setHoverContactNav(false)} className="lg:hidden flex py-5 text-black w-full pl-5">

                <button onClick={()=> {setToggleContact(false); console.log('gg'); setResizeContact(false)}} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#ff6059]"><GrFormClose className={`${hoverContactNav? 'block' : 'hidden'} text-sm`}/></button>
                <div onClick={()=> setToggleContact(false)} className="h-4 w-4 cursor-pointer rounded-xl mx-1 bg-[#ffbd2e]"><MdMinimize className={`${hoverContactNav? 'block' : 'hidden'} -mt-0.5`}/></div>
                <div onClick={()=> setResizeContact(!resizeContact)} className="h-4 w-4 cursor-pointer flex justify-center items-center rounded-xl mx-1 bg-[#28c941]"><IoMdResize className={`${hoverContactNav? 'block' : 'hidden'} text-xs`}/></div>
            </div>
            <div className={`flex h-[inherit] items-center w-[80%]`}>
            <div className={`${resizeContact ? 'flex-col-reverse' : 'md:flex-row flex-col-reverse'} w-full flex justify-center`}>
                <div className={`${resizeContact ? 'w-full' : 'w-full'} pb-6`}>
                <h1 className={`font-medium mb-4 xl:my-4 ${resizeContact ? 'text-3xl':'text-2xl'}`}>Message me anything</h1>
                <form onSubmit={messageMe}>
                    <div className="flex flex-col my-2">
                        <span>Name</span>
                        <input required className="bg-[#4f4f4f75] px-2 py-1 my-2 rounded outline-none" type="text" placeholder="Your name" />
                    </div>
                    <div className="flex flex-col my-2">
                        <span>Message</span>
                        <textarea required className="bg-[#4f4f4f75] px-2 py-1 my-2 rounded outline-none resize-none" placeholder="Your message" cols="30" rows="8"></textarea>
                    </div>
                    <div className="w-full text-center mt-4 mb-2">
                        <button type="submit" className="px-4 py-1 outline-none transition-all hover:bg-[#1942b5] bg-[#2257ee] rounded-md">Send</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </Draggable>
        </>
    )
}