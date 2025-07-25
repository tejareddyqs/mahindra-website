import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1da1fd60-7c45-46e6-8686-9d7e84901f0c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Submission failed ");
    }
  };

  return (
    <div className='contact'>
      <div className="contactCol">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={phone_icon} alt="" />Phone: 555-555-5555</li>
          <li><img src={mail_icon} alt="" />palakrishnateja@gmail.com</li>
          <li><img src={location_icon} alt="" />Mahindra University, Gandimaisamma, Hyderabad, India</li>
        </ul>
      </div>

      <div className='contactCol'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="number" name="phone" placeholder="Enter Your Mobile Number" required />
          <label>Write your Message</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Submit <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
