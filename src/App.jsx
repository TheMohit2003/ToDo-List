import React from "react"
import Navbar from "./Components/Navbar"
import Box from "./Components/Box"
import Footer from "./Components/Footer"

export default function App(){
    return <div className="app">
        <Navbar title="ToDo List"/>
        <Box/>
        <Footer/>
    </div>
}