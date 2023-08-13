import React from "react";
import {useState} from "react";
import '../Style/JobSeeker.css';
const {items} = require("../Components/Data/Data");

export default function Sidebar() {
    return(
        <nav id='Jsidebar'>
            <ul className="sidebar-list">
                {items.map((item, index) => {
                    return (
                        <li
                            key={index}
                            id={window.location.pathname === item.path ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = item.path;
                            }}
                            className="row">
                            <span className="icon"><i className={item.icon} /></span>
                            <span className="title">{item.title}</span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}