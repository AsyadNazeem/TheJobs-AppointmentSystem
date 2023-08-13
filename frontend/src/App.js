import React, {useState} from "react";
import "./Styles/App.css";
import {Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Register from "./Components/register";
import Login from "./Components/Login";
import JobSeekerHome from "./Dashboard/JobSeeker/JobSeekerHome";
import ConsultantHome from "./Dashboard/Consultent/ConsultantHome";
import PrivateRoute from "./Dashboard/Components/PrivateRoute";
import JSHome from "./Dashboard/JobSeeker/Component/JSHome";
import JSDetails from "./Dashboard/JobSeeker/Component/JSDetails";
import RegisterConsultant from "./Components/register";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route element={<PrivateRoute/>}>
                    <Route path="/jobseekerhome" element={<JobSeekerHome/>}/>
                    <Route path="/jshome" element={<JSHome/>}/>
                    <Route path="/jsdetails" element={<JSDetails/>}/>
                    <Route path="/consultanthome" element={<ConsultantHome/>}/>
                    <Route path="/registerconsultant" element={<RegisterConsultant/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
