import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    if (name === 'name') {
      const nameRegex = /^[a-zA-Z\s]*$/;
      const isValid = nameRegex.test(value);
      setErrors(prevErrors => ({ ...prevErrors, [name]: isValid ? '' : 'Invalid name' }));
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);
      setErrors(prevErrors => ({ ...prevErrors, [name]: isValid ? '' : 'Invalid email' }));
    } else if (name === 'message') {
      const isValid = value.trim() !== '';
      setErrors(prevErrors => ({ ...prevErrors, [name]: isValid ? '' : 'Message cannot be empty' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidForm = Object.values(errors).every(error => error === '');
    if (isValidForm) {
      console.log(formData);
      setSuccessMessage('Message submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); 
    } else {
      setSuccessMessage('');
      window.alert('Please fix the errors before submitting');
    }
  };

  return (
    <div className="contact-container" id='contact'>
      <h1>Contact Us</h1>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ borderColor: errors.name ? 'red' : 'gold' }}
           
          />
          {errors.name && <span style={{ color: 'gold' }}>{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? 'red' : 'gold' }}
           
          />
          {errors.email && <span style={{ color: 'gold' }}>{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ borderColor: errors.message ? 'red' : 'gold' }}
            
          />
          {errors.message && <span style={{ color: 'gold' }}>{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
