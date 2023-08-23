import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        setErrorMessage('');

        await axios.post("http://localhost:3005/login", {email, password, userType})
            .then((response) => {
                console.log(response);
                if (response.data.message === "Login Success" && userType === "Job Seeker") {
                    navigate("/jobseekerhome");
                } else if (response.data.message === "Login Success" && userType === "Consultant") {
                    navigate("/consultanthome");
                } else {
                    setErrorMessage(response.data.message);
                }
            })
            .catch((error) => console.log(error));
    };


    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="login-container">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleLogin}>
                    <div>
                        <label className="form-label" htmlFor="email">Email Address</label><br/>
                        <input
                            className="text-box"
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">Password</label><br/>
                        <input
                            className="text-box"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="userType">User Type</label><br/>
                        <select
                            className="text-box"
                            id="userType"
                            name="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}>
                            <option value="Job Seeker">Job Seeker</option>
                            <option value="Consultant">Consultant</option>
                        </select>
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button type="submit" className="btn-sub">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
