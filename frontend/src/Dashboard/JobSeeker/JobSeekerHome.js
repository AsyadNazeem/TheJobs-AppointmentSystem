import React from "react";
import TopBar from "./TopBar";
import '../Style/JobSeeker.css'
import Sidebar from "../JobSeeker/Sidebar";


export default function JobSeekerHome() {
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
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h1 className="text-center">Welcome to Job Seeker Dashboard</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row dash-card">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mt-3 mt-md-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mt-3 mt-md-0">
                                            <div className="card-body">
                                                <h5 className="card-title">Special title treatment</h5>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" className="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
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