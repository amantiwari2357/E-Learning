import React from 'react';
import './Learning.css';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/select');
  };

  return (
    <div className="start-container">
      <div className="start-left">
        <h1>Start learning with ASK ME</h1>
        <p>Get unlimited access to structured courses & doubt clearing sessions.</p>
        <button className="start-button" onClick={handleStartLearning}>
          Start learning
        </button>
      </div>
      <div className="start-right">
        <div className="stat-card">
          <h2>10+</h2>
          <p>Exam categories</p>
        </div>
        <div className="stat-card">
          <h2>4+</h2>
          <p>Educators</p>
        </div>
        <div className="stat-card">
          <h2>1+</h2>
          <p>Daily live classes</p>
        </div>
        <div className="stat-card">
          <h2>1+</h2>
          <p>Daily live discussion</p>
        </div>
        <div className="stat-card">
          <h2>10+</h2>
          <p>Video lessons</p>
        </div>
        <div className="stat-card">
          <h2>2h+</h2>
          <p>Mins. watched</p>
        </div>
      </div>
    </div>
  );
};

export default Start;
