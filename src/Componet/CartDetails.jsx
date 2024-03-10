import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FeedbackForm from './Feedback';
import Sliderbar from './Sliderbar';
import '../Style/CartDetails.css'; 

export default function CartDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${id}`)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('Error fetching employee details:', error);
      });
  }, [id]);

  return (
    <>
      <Sliderbar />
      <div className="cart-details">
        {employee && (
          <div className="employee-container">
            <div className="image-container">
              <img src={employee.image} alt={employee.firstName} />
            </div>
            <div className="details">
              <h3>{employee.firstName} {employee.lastName}</h3>
              <p>Email: {employee.email}</p>
              <p>Phone: {employee.phone}</p>
              <p>Age: {employee.age}</p>
              <p>Gender: {employee.gender}</p>
              <p>Blood Group: {employee.bloodGroup}</p>
              <p>Address: {employee.address.address}, {employee.address.city}, {employee.address.state}, {employee.address.postalCode}</p>
              <p>Company: {employee.company.name}</p>
              <p>Job Title: {employee.company.title}</p>
              <p>University: {employee.university}</p>
            </div>
          </div>
        )}
        
          <FeedbackForm className="feedback-form" />
     
      </div>
    </>
  );
}
