import React from 'react';
import './Footer.css'; // Include the CSS styles

const Footer = () => {
  return (
    <footer>
      <div className="footer__row__1">
        <h4>Questions? Call 9031359720</h4>
      </div>
      <div className="footer__row__2">
        <div className="column__1">
          <p>Project</p>
          <p>Home</p>
          <p>Privacy</p>
          <p>Founder</p>
        </div>
        <div className="column__2">
          <p>Help Centre</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div className="column__3">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Only on Ask Me</p>
        </div>
        <div className="column__4">
          <p>Policy</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="footer__row__3">
        <div className="dropdown__container">
          <i className="fas fa-globe"></i>
          <select name="languages" id="languagesSelect" className="language__drop__down">
            <option value="english" selected>English</option>
            <option value="hindi">हिन्दी</option>
          </select>
        </div>
      </div>
      <div className="footer__row__4">
        <p>Ask Me India</p>
      </div>
    </footer>
  );
};

export default Footer;
