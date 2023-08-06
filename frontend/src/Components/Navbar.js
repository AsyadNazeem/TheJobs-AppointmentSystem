import React, { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const navRef = useRef();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const showNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = "hidden"; // Prevent scrolling when navbar is open
        } else {
            document.body.style.overflow = "auto"; // Restore scrolling when navbar is closed
        }
    }, [isNavbarOpen]);

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    };

    return (
        <div>
            <ul className="Navbar">
                <div>
                    <h1 className="navbar-header">dev.Asyad</h1>
                </div>
                <nav ref={navRef} className={`nav-links ${isNavbarOpen ? "responsive_nav" : ""}`}>
                    <NavLink to="/" className="active" onClick={closeNavbar}>
                        <li className="Navbar-link">Home</li>
                    </NavLink>
                    <NavLink className="Navbar-links" activeClass="active" to="/about" onClick={closeNavbar}>
                        <li className="Navbar-link">About</li>
                    </NavLink>
                    <NavLink to="/contacts" activeClass="active" onClick={closeNavbar}>
                        <li className="Navbar-link">Contact</li>
                    </NavLink>
                    <NavLink to="/register" activeClass="active" onClick={closeNavbar}>
                        <li className="Navbar-link">Register</li>
                    </NavLink>
                    <NavLink to="/login" activeClass="active" onClick={closeNavbar}>
                        <li className="Navbar-link">Login</li>
                    </NavLink>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </ul>
        </div>
    );
}
