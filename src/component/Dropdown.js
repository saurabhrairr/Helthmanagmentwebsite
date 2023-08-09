import React from 'react';
import "./Dropdown.css"

const Dropdown = ({ options, onSelect }) => {
  const handleChange = (e) => {
    window.location.href = e.target.value; // Open selected option in the same page
  };

  return (
    <select className="custom-dropdown" onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.href}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;