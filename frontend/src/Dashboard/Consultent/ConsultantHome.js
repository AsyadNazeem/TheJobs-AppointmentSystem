import React from "react";
import Sidebar from "../Components/MyComponent";
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
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h1 className="text-center">Welcome to Consultant Dashboard</h1>
                                        <h3 className="text-center">Consultant details</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the
                                                            card title and make up the bulk of the card's content.</p>
                                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">Some quick example text to build on the
                                                            card title and make up the bulk of the card's content.</p>
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
            </div>
        </div>
    )
}