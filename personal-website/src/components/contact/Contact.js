import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import MatrixBackground from './MatrixBackground';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const emailSentStatus = localStorage.getItem('isEmailSent');
    if (emailSentStatus) {
      setIsEmailSent(true);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
    setErrorMessage(''); // Reset error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailSent) {
      setErrorMessage('You have already sent an email. Please try again later.');
      return;
    }

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        // console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully');
        localStorage.setItem('isEmailSent', 'true');
        setIsEmailSent(true);
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        // console.log('FAILED...', error);
        alert('Error sending email');
      });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center contact-container" id="contact">
      <MatrixBackground />
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Jack Black"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              className="form-textarea"
              rows="4"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <motion.button
            type="submit"
            className="contact-form-button"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
