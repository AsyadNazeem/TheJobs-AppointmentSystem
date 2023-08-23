import React from "react";
import ConsultantSidebar from "./ConsultantSidebar";
import "../Style/Consultant.css";
import ConsultantTopbar from "./ConsultantTopbar";

export default function ConsultantHome() {
    return (
        <div className="dash">
            <div className="page">
                <div className='top'>
                    <ConsultantTopbar/>
                </div>
                <div className='main'>
                    <div className='side-bar'>
                        <ConsultantSidebar/>
                    </div>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h1 className="text-center">Welcome to Consultant Dashboard</h1>
                                        <h3 className="text-center">Consultant details</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row dash-card">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                                <div className="row ">
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