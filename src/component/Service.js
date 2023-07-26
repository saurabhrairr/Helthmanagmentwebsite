import React, { useState } from 'react';
import Dropdown from './Dropdown';
import About from './About';

const Service= () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (event) => {
       const selectedOption = event.target.value;
       if (selectedOption === 'about') {
         window.open('/about', '_blank');
       } else {
         // Handle other options
       }
  };

  const options = [
       { value: 'home', label: 'Home', href: '/home' },
       { value: 'about', label: 'About', href: '/About' },
       { value: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <Dropdown options={options} onSelect={handleOptionSelect} />

      {selectedOption === 'home' && <h1>Home Page</h1>}
      {selectedOption === 'about' && <About/>}
      {selectedOption === 'contact' && <h1>Contact Page</h1>}
    </div>
  );
};

export default Service;