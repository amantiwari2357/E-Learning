import React from "react";
import "./Choose.css"; // Add appropriate styling here
import '../assets/live.png'

const WhyChooseAskMe = () => {
  return (
    <section className="why-choose-section">
      <h1 className="why-choose-heading">Why Choose Ask Me?</h1>
      <div className="features-container">
        {/* Feature 1 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/dailyliveclasses_0c0023950f_c187155ee3.svg?q=75&auto=format%2Ccompress&w=3840" 
            alt="Daily Live Classes"
            className="feature-image"
          />
          <h2>Daily live classes</h2>
          <p>
            Chat with educators, ask questions, answer live polls, and get your
            doubts cleared—all while the class is going on.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&auto=format%2Ccompress&w=1920" 
            alt="Practice and Revise"
            className="feature-image"
          />
          <h2>Practice and revise</h2>
          <p>
            Learning isn’t just limited to classes with our practice section,
            mock tests, and lecture notes shared as PDFs for your revision.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/syllabus_a9da21d824_b20b285483.svg?q=75&auto=format%2Ccompress&w=1920" 
            alt="Mock Practices"
            className="feature-image"
          />
          <h2>Mock Practices</h2>
          <p>
            Practices isn’t just limited to classes with our practice section,
            mock tests, and lecture notes shared as PDFs for your revision.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature">
          <img
            src="https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&auto=format%2Ccompress&w=1920" 
            alt="Learn Anytime, Anywhere"
            className="feature-image"
          />
          <h2>Learn anytime, anywhere</h2>
          <p>
            One subscription gets you access to all our live and recorded
            classes to watch from the comfort of any of your devices.
          </p>
        </div>
      </div>

      {/* Centered "Book Free Class" Button */}
      <div className="book-class-container">
        <button 
          className="book-class-button" 
          onClick={() => window.location.href = '/FreeClass'}
        >
          Book your Free Class
        </button>
      </div>
    </section>
  );
};

export default WhyChooseAskMe;
