import React from 'react';
import './App.css';
import ContactForm from './ContactForm';

import  './images/doctor.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Us</h1>
        <ContactForm />
        <img src="./images/doctor.jpg" alt="image"/>
      </header>
    </div>
  );
}

export default App;
