import React, { useState } from "react";
import "./Goal.css";

const Select = () => {
  // Example data for popular goals
  const goals = [
    { id: 1, name: "UPSC CSE - GS", icon: "🏛️" },
    { id: 2, name: "IIT JEE", icon: "⚗️" },
    { id: 3, name: "NEET UG", icon: "🩺" },
    { id: 4, name: "Bank exams", icon: "💰" },
    { id: 5, name: "SSC JE & state AE exams", icon: "📋" },
    { id: 6, name: "CAT & other MBA entrance tests", icon: "✏️" },
    { id: 7, name: "CBSE class 12", icon: "📖" },
    { id: 8, name: "CA Intermediate", icon: "📊" },
    { id: 9, name: "BSEB Intermediate", icon: "📖" },
    { id: 10, name: "BSEB Metric", icon: "📖" },
  ];

  // State for search input and filtered goals
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered goals based on search term
  const filteredGoals = searchTerm
    ? goals.filter((goal) =>
        goal.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : goals;

  return (
    <div className="select-container">
      <h1 className="main-heading">Select your goal / exam</h1>
      <p className="sub-heading">{goals.length}+ exams available for your preparation</p>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type the goal / exam you're preparing for"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="popular-goals-heading">Popular goals</h2>
      {/* Display filtered goals */}
      <div className="goals-grid">
        {filteredGoals.length > 0 ? (
          filteredGoals.map((goal) => (
            <div key={goal.id} className="goal-card">
              <div className="goal-icon">{goal.icon}</div>
              <p className="goal-name">{goal.name}</p>
            </div>
          ))
        ) : (
          <p>No goals found. Try searching for something else!</p>
        )}
      </div>

      {/* See all goals button */}
      <button className="see-all-button">See all goals (200+)</button>
    </div>
  );
};

export default Select;
