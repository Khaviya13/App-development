import React from 'react';
import "./contact.css" 
import PrimarySearchAppBar from './Navbar';


function ContactUs() {
  return (
     <div>
      <PrimarySearchAppBar/>
    <div className="container">
      <h1>Contact Us</h1>
      <div className="content">
        <p>
        Welcome to Crime Hut, your trusted online platform for reporting and addressing crime within our community. At Crime Hut, our mission is to empower individuals to contribute to a safer and more secure neighborhood by providing a user-friendly and confidential platform for reporting and addressing criminal activities.

        </p>
      
      </div>
      <div className="btn">
        
      </div>
      <form className="logform">
        <div className="sform">
          <div className="form">
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" placeholder="Enter a valid email address" required />
            <hr />
          </div>
          <div className="form">
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" placeholder="Enter your Name" required />
            <hr />
          </div>
          <div className="form-1">
            <label htmlFor="address">Address</label><br />
            <textarea name="address" id="address" cols="50" rows="2" placeholder="Enter your Address"></textarea>
            <hr />
          </div>
          <div className="form-1">
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" cols="50" rows="4" placeholder="Enter your Messages" required></textarea>
            <hr />
          </div>
        </div>
        <button className="btn2">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
