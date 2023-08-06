import React from "react";
import './Styles/App.css';
import Register from "./Components/register";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home"
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Components/Login";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App
