import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Questions.css"; // Add appropriate styling here

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [email, setEmail] = useState(""); // State to store email input
  const navigate = useNavigate(); // Initialize navigation

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleEmailSubmission = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email.");
    } else {
      alert("Email submitted!");
      navigate("/portfolio"); // Navigate to the Portfolio component
    }
  };

  return (
    <main>
      <section>
        <h1 className="FAQ__heading">Frequently Asked Questions</h1>
        <div className="FAQ__list">
          {/* FAQ 1 */}
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={() => toggleFAQ(0)}>
              What Is Ask Me? <i className="fal fa-plus"></i>
            </button>
            {activeIndex === 0 && (
              <div className="FAQ__visible">
                <p>
                  Ask me is an online learning platform that provides full-stack
                  courses for beginners and multiple full-stack projects.
                </p>
                <p>
                  You can visit our platform and build your career easily with
                  Ask Me.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={() => toggleFAQ(1)}>
              How much does Ask Me cost? <i className="fal fa-plus"></i>
            </button>
            {activeIndex === 1 && (
              <div className="FAQ__visible">
                <p>
                  Visit Ask Me on your smartphone, tablet, or laptop device.
                  This is fully free for beginners and students.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={() => toggleFAQ(2)}>
              Where can I visit? <i className="fal fa-plus"></i>
            </button>
            {activeIndex === 2 && (
              <div className="FAQ__visible">
                <p>
                  Watch anywhere, anytime, on an unlimited number of devices.
                  Sign in with your Ask Me account to watch instantly on the web
                  at askme.com from your personal computer or on any
                  internet-connected device that offers the Ask Me web app,
                  smartphones, tablets.
                </p>
                <p>
                  You can also download your favorite projects from GitHub.
                  Use downloads to watch while offline.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={() => toggleFAQ(3)}>
              How do I cancel? <i className="fal fa-plus"></i>
            </button>
            {activeIndex === 3 && (
              <div className="FAQ__visible">
                <p>
                  Ask Me is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees—start or stop your
                  account anytime.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={() => toggleFAQ(4)}>
              What kind of courses do you offer? <i className="fal fa-plus"></i>
            </button>
            {activeIndex === 4 && (
              <div className="FAQ__visible">
                <p>
                  We offer courses on various technologies like MERN stack, Java,
                  Python, and database management. We also provide project-based
                  learning opportunities.
                </p>
              </div>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="FAQ__accordian">
            <button className="FAQ__title" onClick={() => toggleFAQ(5)}>
              How do I get support? <i className="fal fa-plus"></i>
            </button>
            {activeIndex === 5 && (
              <div className="FAQ__visible">
                <p>
                  You can reach out to our support team via the contact form or
                  email us at support@askme.com for any assistance.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Email Submission Section */}
        <div className="custom-email-form-container">
          <div className="custom-form-container">
            <h2
              style={{
                fontFamily: "Times New Roman, Times, serif",
                color: "violet",
              }}
            >
              Fill Email to Contact Founder
            </h2>
            <input
              type="email"
              className="custom-email-input"
              id="emailInput"
              placeholder="Email"
              value={email} // Bind state
              onChange={(e) => setEmail(e.target.value)} // Update state
            />
            <label className="custom-email-label" htmlFor="emailInput"></label>
          </div>
          <button
            className="custom-primary-button"
            onClick={handleEmailSubmission}
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
