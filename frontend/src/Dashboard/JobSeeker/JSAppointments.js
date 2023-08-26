import React from "react";
import TopBar from "./TopBar";
import '../Style/JobSeeker.css'
import Sidebar from "../JobSeeker/Sidebar";
const {JobProfileViewer} = require("../Components/Data/Data");

export default function JSAppointments() {
    return (
        <div className="dash">
            <div className="page">
                <div className='top'>
                    <TopBar/>
                </div>
                <div className='main'>
                    <div className='side-bar'>
                        <Sidebar/>
                    </div>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12 mb-4">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h1 className="text-center">Appointments</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Loop through the JobProfileViewer data */}
                                {JobProfileViewer.map((profile, index) => (
                                    <div className="col-sm-4 mb-3 mb-sm-4" key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title js-Card-heading">{profile.title}</h5>
                                                <div>
                                                    <p className="card-text js-Card-description">{profile.description}</p>
                                                    <div className="js-card-expertise">
                                                        <h5 className='js-card-expertise-head'>Expertise : </h5>
                                                        <p className="js-card-expertise-dis">{profile.expertise}</p>
                                                    </div>
                                                    <a href="#" className="btn btn-primary">CHECK PROFILE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}