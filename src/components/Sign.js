import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css";
function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: '',
        phoneError: ''
    });

    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            nameError: '',
            emailError: '',
            passwordError: '',
            confirmPasswordError: '',
            phoneError: ''
        };

        if (password !== confirmPassword) {
            newErrors.confirmPasswordError = 'Passwords do not match.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        const user = {
            username,
            email,
            password,
            phone
        };

        fetch('http://localhost:3003/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Signup successful!");
                    navigate('/login'); // Navigate to the login page
                } else {
                    setErrors(prevErrors => ({
                        ...prevErrors,
                        emailError: "Email is already registered."
                    }));
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setErrors(prevErrors => ({
                    ...prevErrors,
                    emailError: "An error occurred. Please try again."
                }));
            });
    };

    return (
        <form onSubmit={handleSignUp} id="signupForm">
            <h1>Sign Up</h1>
            <div>
                <label htmlFor="username">Enter Name</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {errors.nameError && <div className="error">{errors.nameError}</div>}
            </div>
            <div>
                <label htmlFor="email">Enter Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {errors.emailError && <div className="error">{errors.emailError}</div>}
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
                {errors.passwordError && <div className="error">{errors.passwordError}</div>}
            </div>
            <div>
                <label htmlFor="c_password">Confirm Password</label>
                <input
                    type="password"
                    id="c_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {errors.confirmPasswordError && <div className="error">{errors.confirmPasswordError}</div>}
            </div>
            <div>
                <label htmlFor="phone">Enter Phone</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                {errors.phoneError && <div className="error">{errors.phoneError}</div>}
            </div>
            <button type="submit">Sign Up</button>
            {/* <div>
                Already have an account? <button onClick={() => navigate('/login')} className="btn">login</button>
            </div> */}
            <div>
    Already have an account? <span onClick={() => navigate('/login')} className="link">login</span>
</div>

        </form>
    );
}

export default SignUp;
