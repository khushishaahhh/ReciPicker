import React from "react";
import "./HomePage.css";
import logo from './assets/logo.png';
import blue from './assets/tomato.webp';

function Home() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logoimg" />
        <div className="logo">
          Reci<span className="highlight">Picker</span>
        </div>
      </div>
        <div className="buttons">
          <button className="login-btn">Log In</button>
          <button className="signin-btn">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>
          great <span className="highlight">Deals</span>,<br />
          for great <span className="highlight">Meals</span>
        </h1>
        <p className="description">
          "Find tasty, budget-friendly recipes that make every meal memorable. Great deals for great meals, all in one place!"
        </p>
        <button className="signup-btn">Sign Up</button>
        <p className="already-account">
          Already have an account? <span className="login-link">Log in</span>
        </p>
        <div className="container">
          <img className="blue" src={blue} />
        </div>
      </div>
    </div>
  );
}

export default Home;
