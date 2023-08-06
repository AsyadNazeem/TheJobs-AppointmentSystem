import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("Job Seeker");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const checkEmailExists = async (email) => {
        await axios
            .post("http://localhost:3001/checkEmailExists", {email})
            .then((response) => {
                console.log(response);
                if (response.data.message === "Email exists") {
                    setErrorMessage("Email already exists.");
                }
            })
            .catch((error) => console.log(error));
    }

    const handleSubmit = (e) => {
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

        // Check if the email exists in the database
        const emailExists = checkEmailExists(email);

        if (emailExists) {
            setErrorMessage("Email already exists.");
            setIsSubmitting(false);
            return;
        }


        axios
            .post("http://localhost:3001/register", {username, email, password, userType})
            .then((response) => {
                console.log(response);
                setIsSubmitting(false);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="register">
            <div>
                <h1>Register</h1>
            </div>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="userType">User Type</label>
                    <input
                        id="userType"
                        name="userType"
                        value={userType}
                        aria-readonly={true}
                        onSubmit={(e) => setUserType(e.target.value)}
                        readOnly
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="form-group">
                    <button type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}
