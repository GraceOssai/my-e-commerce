import React from 'react'
import './Category.css'

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2>Category</h2>
      <div className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" />
        <span className="checkmark"></span>All
      </div>
    </div>
  );
};

export default Category