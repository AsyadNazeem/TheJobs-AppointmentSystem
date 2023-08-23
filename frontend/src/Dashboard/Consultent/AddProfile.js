import React from "react";
import TopBar from "../Consultent/ConsultantTopbar";
import Sidebar from "../Consultent/ConsultantSidebar";

export default function AddProfile() {
    const [country, setCountry] = React.useState([]);
    const [country_id, setCountry_id] = React.useState('');
    const [state, setState] = React.useState([]);
    const [state_id, setState_id] = React.useState('');
    const [enable, setEnable] = React.useState(true);

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
                                        <form className="row g-3">
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
                                                <div className="container country-container">
                                                    <span className="country" id="country"></span>
                                                    <select className="form-select country" name="country" id="country">
                                                        <option value="">Select Country</option>
                                                        {country.map((item,index ) => (
                                                            <option key={index} value={item.country_id}>{item.country_name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="name">State</label>
                                                <div className="container country-container">
                                                    <span className="flag" id="flag"></span>
                                                    <select className="countries form-select" name="countries" id="countries">
                                                        <option value="">Select State</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label htmlFor="name">City</label>
                                                <div className="container country-container">
                                                    <span className="flag" id="flag"></span>
                                                    <select className="countries form-select" name="countries" id="countries">
                                                        <option value="">Select City</option>
                                                    </select>
                                                </div>
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
                                                <input type="file" className="form-control" id="name"
                                                       placeholder="Enter Profile Picture"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Resume</label>
                                                <input type="file" className="form-control" id="name"
                                                       placeholder="Enter Resume"/>
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
