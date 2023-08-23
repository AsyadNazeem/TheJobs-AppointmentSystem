import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

export default function RegisterConsultant() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("Job Seeker");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();


    const checkEmailExists = async (email) => {
        try {
            const response = await axios.post("http://localhost:3005/checkEmailExists", {email});
            console.log(response);

            if (response.data.message === "Email exists") {
                setErrorMessage("Email already exists.");
                return true;
            } else {
                setErrorMessage("User registered successfully.");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform basic form validation
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setErrorMessage("Password should be at least 6 characters long.");
            return;
        }

        // Clear any previous error messages
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            // Check if the email exists in the database
            const emailExists = await checkEmailExists(email);

            if (emailExists) {
                setIsSubmitting(false);
                return;
            }

            // Register the user
            const response = await axios.post("http://localhost:3005/register", {
                username,
                email,
                password,
                userType,
            });

            console.log(response);
            setIsSubmitting(false);
            navigate("/login");
        } catch (error) {
            console.log(error);
            setIsSubmitting(false);
        }
    };


    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="register">
                <div>
                    <h1 className="text-center">Register</h1>
                </div>
                <form className="register-form" id="registrationForm" onSubmit={handleSubmit}>
                    <div className="">
                        <label htmlFor="username" className="form-label">Username</label><br/>
                        <input
                            className="text-box"
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="">
                        <label htmlFor="email" className="form-label">Email</label><br/>
                        <input
                            className="text-box"
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="pass-row">
                        <div className="">
                            <label htmlFor="password" className="">Password</label><br/>
                            <input
                                className="pass-tex"
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className="">
                            <label htmlFor="confirmPassword" className="">Confirm Password</label><br/>
                            <input
                                className="pass-tex"
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="userType" className="">User Type</label><br/>
                        <input
                            className="text-box"
                            id="userType"
                            name="userType"
                            value={userType}
                            aria-readonly={true}
                            onSubmit={(e) => setUserType(e.target.value)}
                            readOnly
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="">
                        <button className="btn-sub" type="submit" disabled={isSubmitting}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
