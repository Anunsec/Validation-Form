import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormInput.css'
const Success = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className='success'>
      <h1>Form Submission Successful</h1>
      {formData ? (
        <div>
          <p><b>First Name:</b> {formData.firstName}</p>
          <p><b>Last Name:</b> {formData.lastName}</p>
          <p><b>Username:</b> {formData.username}</p>
          <p><b>Email:</b> {formData.email}</p>
          <p><b>Phone No:</b> {formData.phoneNo}</p>
          <p><b>Country:</b> {formData.country}</p>
          <p><b>City:</b> {formData.city}</p>
          <p><b>Pan No:</b> {formData.panNo}</p>
          <p><b>Aadhar No:</b> {formData.aadharNo}</p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default Success;