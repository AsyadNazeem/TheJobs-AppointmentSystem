import React from "react";
import TopBar from "./TopBar";
import '../Style/JobSeeker.css'
import Sidebar from "../JobSeeker/Sidebar";

const { JobSeekerAppointmentDetails } = require("../Components/Data/Data");

export default function OngoinAppointments() {
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
                                        <h1 className="text-center">On Going Appointment</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {JobSeekerAppointmentDetails.map((appointment, index) => (
                                <div className="col-sm-6 mb-3 mb-sm-0" key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="js-appointment-date-time">
                                                <h2 className="date" dangerouslySetInnerHTML={{ __html: appointment.Date }} />
                                                <h2 className="time" dangerouslySetInnerHTML={{ __html: appointment.Time }} />
                                            </div>
                                            <div>
                                                <p className="card-text js-Card-description">{appointment.Description}</p>
                                                <div className="js-appointer-details">
                                                    <h5 className='js-appointer-name'>{appointment.AppointorName}</h5>
                                                    <p className="js-appointer-designation">{appointment.AppointorDesignation}</p>
                                                </div>
                                                <a href="#" className="btn btn-primary">CHECK DETAILS</a>
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
    )
}