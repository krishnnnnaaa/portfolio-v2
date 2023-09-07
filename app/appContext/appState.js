"use client"
import { createContext, useState } from "react";

export const AppStateContext = createContext()

export function AppstateProvider({ children }) {
    const [toggleAbout, setToggleAbout] = useState(false)
    const [toggleTools, setToggleTools] = useState(false)
    const [toggleProjects, setToggleProjects] = useState(false)
    const [toggleContact, setToggleContact] = useState(false)
    const [toggleDesktopBackground, setToggleDesktopBackground] = useState(false)
    const [resizeAbout, setResizeAbout] = useState(false)
    const [resizeTools, setResizeTools] = useState(false)
    const [resizeProjects, setResizeProjects] = useState(false)
    const [resizeContact, setResizeContact] = useState(false)
    const [messageData, setMessageData] = useState(null)
    const [desktopBg, setDesktopBg] = useState(null)

    const sendDM = async() => {
        if(messageData){
    const url = 'https://free-email-sender1.p.rapidapi.com/send_mail';
    const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '08c437c219mshf0a82642cb67f8dp1e874bjsn467aaa79bd8c',
        'X-RapidAPI-Host': 'free-email-sender1.p.rapidapi.com'
    },
    body: {
        to: 'gupta.krishnalko111@gmail.com',
        subject: 'DM from your Portfolio',
        message: `Hello Krishna!, ${messageData.name} has sent you a DM, his/her email is ${messageData.email}. Message is: ${messageData.message}`,
        senders_name: messageData.name
    }
    };
    
    try {
    const response = await fetch(url, options);
    result = await response.text();
    console.log(result);
    } catch (error) {
    console.error(error);
    }
    }}
    const value = {
        toggleAbout, 
        setToggleAbout, 
        toggleTools, 
        setToggleTools, 
        toggleProjects, 
        setToggleProjects,
        toggleContact, 
        setToggleContact,
        resizeAbout, 
        setResizeAbout,
        resizeTools, 
        setResizeTools,
        resizeProjects, 
        setResizeProjects,
        resizeContact, 
        setResizeContact,
        messageData, 
        setMessageData,
        sendDM,
        toggleDesktopBackground, 
        setToggleDesktopBackground,
        setDesktopBg,
        desktopBg
    }
    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>

)
}