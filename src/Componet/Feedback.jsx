import React, { useState } from 'react';
import '../Style/FeedbackForm.css'; 

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFeedback('');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };



  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thank you for submitting your feedback!</h2>
            <button onClick={handleClosePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
