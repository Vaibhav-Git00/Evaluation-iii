import React from 'react'
import "./Main.css";
import ss from '../assets/ss.png';
import play from '../assets/google-play.png';
import lady from '../assets/lady_working.svg';
import app from '../assets/app-store.png'
import anytime from '../assets/use_anytime.svg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SignUp from './Sign';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar section */}
      <header className="header sticky">
        <a href="#home" className="logo-text">
          <span className="expense">Expense</span><span className="sol">Sol</span>
        </a>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="li-all"><a className="navbar-link" href="#home">Home</a></li>
            <li className="li-all"><a className="navbar-link" href="#feature">Features</a></li>
            <li className="li-all"><a className="navbar-link" href="#feedback">Feedback</a></li>
            <li className="li-all"><Link to="/card" className='navbar-link'>Card</Link></li>
            <button onClick={() => navigate('/login')} className="btn">
              Try Now
            </button>
          </ul>
        </nav>
        <div className="mobile-navbar-btn">
          <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
          <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-hero" id="home">
        <div className="hero-leftside">
          <h1>Track your Expenses to Save Money</h1>
          <p>Track your income and categorize your expenses. Create a budget to allocate funds and review it regularly to stay on top of your finances.</p>
          <div className="button-group">
            <img src={play} alt="Playstore" className="playstore" />
            <img src={app} alt="applestore" className="playstore" />
          </div>
        </div>
        <div className="hero-rightside">
          <img src={lady} alt="heroimg" />
        </div>
      </section>

      {/* Image Section */}
      <section className="image-section">
        <div className="image-container">
          <img src={ss} alt="logo" className="logo" />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-feature" id="feature">
        <div className="feature-leftside">
          <img src={anytime} alt="heroimg" />
        </div>
        <div className="feature-rightside">
          <h2>Features</h2>
          <ul className="features-list">
            <li>Track Income and Expenses Easily</li>
            <li>View Detailed Transaction History Anytime</li>
            <li>CRUD Operations Implemented</li>
            <li>Responsive Design for All Devices</li>
            <li>Simple Login and Signup Process</li>
            <li>Easily Download or Print History</li>
          </ul>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-feedback" id="feedback">
        <h1>Feedback Form</h1>
        <form id="emailForm">
          <textarea id="message" name="message" rows="4" cols="50" placeholder="I value your input! Please type your feedback in the space provided below. This form will send your comments directly to me via email."></textarea><br /><br />
          {/* <button className="send" type="button" onClick={() => sendEmail()}>Send Message</button> */}
        </form>
      </section>
    </div>
  )
}

export default Main
