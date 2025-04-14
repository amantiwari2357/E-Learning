import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./NavBar.css";
import logo from "../assets/logo.webp"; // Replace with your logo file

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleJoinClick = () => {
    navigate("/register"); // Use lowercase "register" to match the route
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">
          <span className="primary"></span> {/* Add a title if needed */}
        </h1>
      </div>
      <div className="navbar-right">
        <div className="navbar-gift">
          <span role="img" aria-label="gift">
            🎁
          </span>
        </div>
        <button className="navbar-login" onClick={handleLoginClick}>
          Log in
        </button>
        <button className="navbar-join" onClick={handleJoinClick}>
          Join for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
