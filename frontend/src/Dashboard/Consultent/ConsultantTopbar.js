import React, {useState} from "react";
import "../Style/Consultant.css";

const {ConsultantSidebarData} = require("../Components/Data/Data");

export default function ConsultantTopbar() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <ul className='top-nav'>
                <li className='Heading'>Consultant</li>
                <di>
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
                </di>
            </ul>
        </div>
    )
}