import React from 'react';
import './Rating.css'; // Ensure you have a corresponding CSS file for styling
import downloadIcon from '../assets/downlaod.png'; // Replace with the correct path
import starIcon from '../assets/star.png'; // Replace with the correct path
import locationIcon from '../assets/location.png'; // Replace with the correct path
import timeIcon from '../assets/time.png'; // Replace with the correct path

const Statistics = () => {
  return (
    <div className="border border-2">
      {/* Section 1 */}
      <div className="div div-1">
        <strong>
          {/* Add your strong text here */}
        </strong>
        <div className="flex">
          <img src={downloadIcon} alt="Download Icon" />
        </div>
        <div className="flex">
          <h4><b>1</b></h4>
        </div>
        <div className="flex">
          <p>Downloads</p>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* Section 2 */}
      <div className="div div-1">
        <div className="flex">
          <img src={starIcon} alt="Star Icon" />
        </div>
        <div className="flex">
          <h4><b>4+ Star</b></h4>
        </div>
        <div className="flex">
          <p>Web Rating</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="div div-1">
        <div className="flex">
          <img src={locationIcon} alt="Location Icon" />
        </div>
        <div className="flex">
          <h4><b>1+ Cities</b></h4>
        </div>
        <div className="flex">
          <p>India</p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="div div-1">
        <div className="flex">
          <img src={timeIcon} alt="Time Icon" />
        </div>
        <div className="flex">
          <h4><b>1 People</b></h4>
        </div>
        <div className="flex">
          <p>Avg Time Spent<br />Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
