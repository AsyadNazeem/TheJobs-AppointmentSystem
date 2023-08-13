import React, {useState} from "react";
import '../Style/JobSeeker.css';
import {DropDownData} from "../Components/Data/Data.js";

export default function TopBar() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <ul className='top-nav'>
                <li className='Heading'>JobSeeker</li>
                <h1 className="bi bi-person-circle profile" onClick={() => setOpen(!open)}></h1>
                <div className={open ? "drop" : "empty"}>
                    <div className="drop-list">
                        <span>
                            <h3 className="bi bi-person-fill"></h3>
                            Profile
                        </span>
                        <span>
                            <h3 className="bi bi-gear-wide-connected"></h3>
                            Settings
                        </span>
                        <span>
                            <h3 className="bi bi-box-arrow-in-right"></h3>
                            Logout
                        </span>
                    </div>
                </div>
                <div className='empty'></div>
            </ul>
        </div>
    )
}