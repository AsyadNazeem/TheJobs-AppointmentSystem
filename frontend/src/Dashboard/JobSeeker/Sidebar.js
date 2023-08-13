import React from "react";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import '../Style/JobSeeker.css';

export default function Sidebar({item, isLastItem}) {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(true);
    const isActive = () => {
        if (item.path && window.location.pathname.includes(item.path)) {
            return true;
        }
        if (item.children) {
            for (const childItem of item.children) {
                if (childItem.path && window.location.pathname.includes(childItem.path)) {
                    return true;
                }
            }
        }
        return false;
    };
    if (item.children) {
        return (
            <div className={open || isActive() ? "sidebar-item open" : "sidebar-item"}>
                <div className={open1 ? 'sidebar-title' : 'sidebar-title-open'}>
                    <span className='span'>
                        {item.icon && <i className={item.icon} onClick={() => setOpen(!open)}></i>}
                        <h3>{item.title}</h3>
                    </span>
                    <i className="bi bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.children.map((item, index) =>
                        <Sidebar key={index}
                                      item={item}
                        />)}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to={item.path}
                         activeClassName="active"
                         className={`sidebar-item ${isLastItem ? "logout plain" : "plain"}
                         ${item.title === "Logout" ? "hover" : ""}`}>
                    {item.icon && <i className={item.icon}></i>}
                    <span className={open1 ? "h3-title" : "h3-title-open"}>{item.title}</span>
                </NavLink>
            </div>
        )
    }
}