import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register(){
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [conformPassword, setConformPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {username, email, password, conformPassword})
            .then((response) => {
                console.log(response);
                navigate("/login");
            })
            .catch((error) => console.log(error));
    }

    return(
        <div className="register">
            <div>
                <h1>Register</h1>
            </div>
            <form id="registrationForm" action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="conformPassword"
                        name="conformPassword"
                        onChange={(e) => setConformPassword(e.target.value)}
                        required></input>
                </div>
                <div className="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}