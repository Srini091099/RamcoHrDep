import React from 'react';
import { Link } from 'react-router-dom';
import Slider1 from '../asset/Slider1.png';
import Slider2 from '../asset/Slider2.png';
import Slider3 from '../asset/Slider3.png';
import '../Style/CardSlider.css';
import { useAuth } from './AuthProvider'; 
import Loginform from './Loginform';

const CardDesign = () => {
  const { authenticated } = useAuth(); 

  const data = [
    { "id": 1, "employee_name": "Tiger Nixon", "employee_salary": 320800, "employee_age": 61, "profile_image": Slider1 },
    { "id": 2, "employee_name": "Garrett Winters", "employee_salary": 170750, "employee_age": 63, "profile_image": Slider2 },
    { "id": 3, "employee_name": "Ashton Cox", "employee_salary": 86000, "employee_age": 66, "profile_image": Slider3 },
    { "id": 4, "employee_name": "n Cox", "employee_salary": 86000, "employee_age": 66, "profile_image": "" },
    { "id": 5, "employee_name": " Cox", "employee_salary": 86000, "employee_age": 66, "profile_image": "" }
  ];

  return (
    <>
      {authenticated ? (
        <>
          <div className="card-title">Your employee details</div>
          <div className="card-container">
            {data.map(employee => (
              <div key={employee.id} className="card">
                <div className="header">
                  <img src={employee.profile_image || 'placeholder-image-url'} alt={employee.employee_name} />
                </div>
                <div className="details">
                  <h3>{employee.employee_name}</h3>
                  <span>Salary: {employee.employee_salary}</span><br />
                  <span>Age: {employee.employee_age}</span>
                  <div className="button-container">
                    <Link to={`/cart/${employee.id}`}>
                      <button className="read-more">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
         
          <Loginform />
        </div>
      )}
    </>
  );
};

export default CardDesign;
