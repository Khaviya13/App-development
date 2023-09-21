import React, { useState } from 'react';
import './register.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: 'Select a country',
    agreeTerms: false,
    receiveNewsletter: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your registration logic here
    // For simplicity, we'll just log the form data
    console.log('Form data:', formData);
  };

  return (
    <div>
      <h2>Responsive Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_field">
          <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        </div>
        <div className="input_field">
          <span><i aria-hidden="true" className="fa fa-lock"></i></span>
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        </div>
        <div className="input_field">
          <span><i aria-hidden="true" className="fa fa-lock"></i></span>
          <input type="password" name="confirmPassword" placeholder="Re-type Password" required onChange={handleChange} />
        </div>
        <div className="row clearfix">
          <div className="col_half">
            <div className="input_field">
              <span><i aria-hidden="true" className="fa fa-user"></i></span>
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
            </div>
          </div>
          <div className="col_half">
            <div className="input_field">
              <span><i aria-hidden="true" className="fa fa-user"></i></span>
              <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="input_field radio_option">
          <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" onChange={handleChange} />
          <label htmlFor="female">Female</label>
        </div>
        <div className="input_field select_option">
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="Select a country">Select a country</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
          </select>
          <div className="select_arrow"></div>
        </div>
        <div className="input_field checkbox_option">
          <input type="checkbox" id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
          <label htmlFor="agreeTerms">I agree with terms and conditions</label>
        </div>
        <div className="input_field checkbox_option">
          <input type="checkbox" id="receiveNewsletter" name="receiveNewsletter" checked={formData.receiveNewsletter} onChange={handleChange} />
          <label htmlFor="receiveNewsletter">I want to receive the newsletter</label>
        </div>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
