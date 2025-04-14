import React from 'react';
import './Parents.css'; // Import the CSS file for styling
import ManoramaImg from '../assets/Manorama.png'; // Replace with the correct path
import SantoshImg from '../assets/Santosh.png'; // Replace with the correct path
import AmanImg from '../assets/Aman.png'; // Replace with the correct path

const Testimonials = () => {
  return (
    <div className="equal">
      <div className="border border-2">
        {/* Testimonial 1 */}
        <div className="div-3">
          <div className="flex">
            <img src={ManoramaImg} alt="Mother of Aman" />
          </div>
          <div className="flex">
            <h6>ASK ME is the best Learning Platform for my son.</h6>
          </div>
          <div className="flex">
            <strong>Mother Of Aman</strong>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="div-3">
          <div className="flex">
            <img src={SantoshImg} alt="Father of Aman" />
          </div>
          <div className="flex">
            <h6>My son Understands Coding With Ask Me.</h6>
          </div>
          <div className="flex">
            <strong>Father Of Aman</strong>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="div-3">
          <div className="flex">
            <img src={AmanImg} alt="Aman" />
          </div>
          <div className="flex">
            <h6>Ask me is a Very helpful Platform For Us.</h6>
          </div>
          <div className="flex">
            <strong>Aman</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
