import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Smartfeedback.css';

import Sliderbar from './Sliderbar';
import { useAuth } from './AuthProvider';

export default function SmartFeedback() {
  const { authenticated } = useAuth();
  const [feedbackData, setFeedbackData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [feedbackTexts, setFeedbackTexts] = useState({});

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        setFeedbackData(response.data.users);
        setFilteredData(response.data.users); 
        const initialFeedbackTexts = {};
        response.data.users.forEach(user => {
          initialFeedbackTexts[user.id] = '';
        });
        setFeedbackTexts(initialFeedbackTexts);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = feedbackData.filter(item => 
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, feedbackData]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleFeedbackChange = (e, userId) => {
    const newTexts = { ...feedbackTexts, [userId]: e.target.value };
    setFeedbackTexts(newTexts);
  };

  const handleSubmitFeedback = userId => {
    const feedbackText = feedbackTexts[userId];
    console.log('Submitted feedback for user', userId, ':', feedbackText);
    const newTexts = { ...feedbackTexts, [userId]: '' };
    setFeedbackTexts(newTexts);
  };
console.log(authenticated)
  return (
    <div>
        <Sliderbar/>
        {authenticated && (
            <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="card-containerfeed">
        {filteredData.map(item => (
          <div key={item.id} className="feedback-card">
            <div className="headerfeed">
              <img src={item.image} alt={item.firstName} />
            </div>
            <div className="detailsfeed">
              <h3>{item.firstName} {item.lastName}</h3> 
              <p>Email: {item.email}</p>
              <p>Phone: {item.phone}</p>
              <p>Age: {item.age}</p>
              <p>Gender: {item.gender}</p>
              
                <div>
                  <textarea 
                    placeholder="Enter your feedback..."
                    value={feedbackTexts[item.id]}
                    onChange={e => handleFeedbackChange(e, item.id)}
                  />
                  <button onClick={() => handleSubmitFeedback(item.id)}>Submit</button>
                </div>
             
            </div>
          </div>
        ))}
        
      </div>
      </>
 )}
    </div>
    
  );
}
