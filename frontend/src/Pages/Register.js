import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Add appropriate styles
import student1 from "../assets/student1.png"; // Replace with the correct path

const Register = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(""); // Store the generated OTP
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.trim().length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    // Simulate OTP generation (In real applications, make an API call)
    const otpCode = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    setGeneratedOtp(otpCode.toString());
    setOtpSent(true);
    alert(`Your OTP is: ${otpCode}`); // Show OTP (for demo purposes)
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      alert("OTP Verified!");
      navigate("/goals"); // Redirect to Goals.js
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="register-container">
      {/* Main Content Section */}
      <div className="main-content">
        {/* Left Section */}
        <div className="student-image-container">
          <img src={student1} alt="Student" className="student-image" />
        </div>

        {/* Right Section */}
        <div className="center-content">
          <h1 className="main-heading">
            Crack your goal with <br /> India's top educators
          </h1>
          <p className="sub-text">
            Over <span className="highlight">1 Hundred</span> learners trust us
            for their preparation
          </p>

          {!otpSent ? (
            // Mobile Input Form
            <form className="mobile-form" onSubmit={handleSendOtp}>
              <div className="input-group">
                <div className="country-code">
                  <span role="img" aria-label="India flag">
                    🇮🇳
                  </span>{" "}
                  +91
                </div>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="mobile-input"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <p className="otp-text">We'll send an OTP for verification</p>
              <button type="submit" className="submit-button">
                Send OTP
              </button>
            </form>
          ) : (
            // OTP Verification Form
            <form className="otp-form" onSubmit={handleVerifyOtp}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="otp-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-button">
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
