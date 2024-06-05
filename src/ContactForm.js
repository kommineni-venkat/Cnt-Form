import React, { useState } from 'react';
import './ContactForm.css';
import {  FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <header className="site-header">
        <div className="site-name">venkat kommineni</div>
        <nav className="site-nav">
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <button>Sign Up</button>
        </nav>
      </header>
      <main className="main-content">
        <div className="form-section">
          <h1>Contact us</h1>
          <p className="subheading">"For any inquiries, please feel free to contact me at = jaikommineni143@gmail.com ." </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                First name
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              </label>
              <label>
                Last name
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
              </label>
            </div>
            <label>
              Email address
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Your message
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="image-section">
          <img src="https://lh3.googleusercontent.com/p/AF1QipN9xsNbRebmzigcXu4Wu2Z0CgiDmT0hg4dX1UMo=s680-w680-h510" alt="Contact" />
        </div>
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="site-name">venkat kommineni</div>
          <nav className="footer-nav">
            
            <a href="#services">Experenice</a>
            <a href="#about">Projects</a>
            <a href="#contact">Skills</a>
            <a href="#faq">contact</a>
          </nav>
          <div className="social-icons">
          <div className="social-icons">
      
      <a href="https://github.com/kommineni-venkat" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/venkat-kommineni-993a7327b/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://instagram.com/venky__kommineni" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactForm;
