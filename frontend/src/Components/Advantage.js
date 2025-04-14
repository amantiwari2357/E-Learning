import React from 'react';
import './Advantage.css';

const Advantage = () => {
  return (
    <div className="advantage-container">
      <h1 className="advantage-heading">Get the Ask Me advantage</h1>
      <div className="advantage-sections">
        <div className="advantage-card">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2022/04/unmatched-attention.png"
            alt="Conceptual Clarity"
            className="advantage-image"
          />
          <h2>Conceptual clarity through visualisation</h2>
        </div>
        <div className="advantage-card">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2022/04/concept-clarity.png"
            alt="Personalised Learning"
            className="advantage-image"
          />
          <h2>Personalised learning programs</h2>
        </div>
        <div className="advantage-card">
          <img
            src="https://cdn1.byjus.com/wp-content/uploads/2022/04/personalised-learning.png"
            alt="Individual Attention"
            className="advantage-image"
          />
          <h2>Unmatched individual attention</h2>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
