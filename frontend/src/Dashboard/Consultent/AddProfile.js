import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import TopBar from "../Consultent/ConsultantTopbar";
import Sidebar from "../Consultent/ConsultantSidebar";

export default function AddProfile() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        state: "",
        city: "",
        designation: "",
        experience: "",
        qualification: "",
        specialization: "",
        about: "",
        profilePicture: null,
        resume: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const { name, files } = event.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formDataWithFiles = new FormData();
        for (const key in formData) {
            formDataWithFiles.append(key, formData[key]);
        }

        axios.post("http://localhost:3005/addProfile", formDataWithFiles)
            .then(response => {
                console.log(response.data.message);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                    country: "",
                    state: "",
                    city: "",
                    designation: "",
                    experience: "",
                    qualification: "",
                    specialization: "",
                    about: "",
                    profilePicture: null,
                    resume: null,
                });
            })
            .catch(error => {
                console.error("Error adding profile", error);
            });
    };

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
                                        <h1 className="text-center m-5">Add Consultant Profile</h1>
                                        <form className="row g-3" onSubmit={handleSubmit}>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">First Name</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter First Name"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Last Name</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Last Name"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Email</label>
                                                <input type="email" className="form-control" id="name"
                                                       placeholder="Enter Email"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Phone Number</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Phone Number"/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="name">Country</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Country"/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="name">State</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter State"/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="name">City</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter City"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Designation</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Designation"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Experience</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Experience"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Qualification</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Qualification"/>
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label htmlFor="name">Specialization</label>
                                                <input type="text" className="form-control" id="name"
                                                       placeholder="Enter Specialization"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">About</label>
                                                <textarea rows="8" className="form-control" id="name"
                                                          placeholder="Enter About"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Profile Picture</label>
                                                <input type="file" name="profilePicture" onChange={handleFileChange} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Resume</label>
                                                <input type="file" name="resume" onChange={handleFileChange} />
                                            </div>
                                            <div>
                                                <button type="submit">Add Profile</button>
                                            </div>
                                        </form>
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
