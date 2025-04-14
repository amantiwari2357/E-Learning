import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// import logo from '../assets/logo.png'; // Import the logo image
import student from '../assets/student.svg'; // Import the student image

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any form validation or submission logic here if needed
    navigate('/goals'); // Redirect to Goals.js
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      {/* Main Content Section */}
      <div className="main-content">
        {/* Left Section */}
        <div className="student-image-container">
          <img src={student} alt="Student" className="student-image" />
        </div>

        {/* Right Section */}
        <div className="center-content">
          <h1 className="main-heading">
            Crack your goal with <br /> India's top educators
          </h1>
          <p className="sub-text">
            Over <span className="highlight">1 Hundred</span> learners trust us for their preparation
          </p>
          <form className="mobile-form" onSubmit={handleRegister}>
            <div className="input-group">
              <div className="country-code">
                <span role="img" aria-label="India flag">
                  🇮🇳
                </span>{' '}
                +91
              </div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="mobile-input"
                required
              />
            </div>
            <p className="otp-text">We'll send an OTP for verification</p>
            <button type="submit" className="submit-button">
              REGISTER NOW
            </button>
          </form>
        </div>
      </div>

      {/* Registration Form Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>Please Register to Continue</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" id="mobile" placeholder="Mobile Number" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            <p className="sign-up-options">Or sign in using:</p>
            <div className="social-signup">
              <button className="social-button google">Google</button>
              <button className="social-button github">GitHub</button>
              <button className="social-button linkedin">LinkedIn</button>
              <button className="social-button facebook">Facebook</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
