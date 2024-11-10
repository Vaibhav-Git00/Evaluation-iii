import "./Login.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3003/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
            .then(response => response.json())
            .then(users => {
                const user = users.find(user => user.email === email && user.password === password);
                if (user) {
                    localStorage.setItem("email", user.email);
                    alert("Login successful!");
                    navigate('/card')
                } else {
                    setEmailError("Email or password is incorrect.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setEmailError("An error occurred. Please try again.");
            });
    };

    return (
        <form onSubmit={handleLogin} id="loginForm">
            <h1>Login</h1>
            <div>
                <label htmlFor="email">Enter Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                {emailError && <div className="error">{emailError}</div>}
            </div>
            <div>
                <label htmlFor="password">Enter Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Log In</button>
            <div>
                Don't have an account? <Link to='/signups'>Sign up</Link>
            </div>
        </form>
    );
}

export default Login;
