import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('Job Seeker');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        setErrorMessage('');

        await axios.post("http://localhost:3001/login", {email, password, userType})
            .then((response) => {
                console.log(response);
                if (response.data.message === "Login Success") {
                    navigate("/");
                } else {
                    setErrorMessage(response.data.message);
                }
            })
            .catch((error) => console.log(error));
    };


    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email Address</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="userType">User Type</label>
                <select
                    id="userType"
                    name="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}>
                    <option value="jobseeker">Job Seeker</option>
                    <option value="consultant">Consultant</option>
                </select>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
