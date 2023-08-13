import React from "react";
import TopBar from "./TopBar";
import '../Style/JobSeeker.css'
import Sidebar from "../JobSeeker/Sidebar";

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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h1 className="text-center">Appointments</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}