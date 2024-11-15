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