// LoginForm.js
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('admin');

    const handleLogin = (e) => {
        e.preventDefault();

        // Add your login logic here
        // For example, you can use the values of username, password, and userType to authenticate the user.
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

                <label htmlFor="usertype">User Type</label>
                <select
                    id="usertype"
                    name="usertype"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                >
                    <option value="consultant">Consultant</option>
                    <option value="jobseeker">Job Seeker</option>
                </select>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
