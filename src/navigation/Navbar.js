import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Navbar = ({handleChange}) => {
  return (
    <nav>
      <div class="nav-container">
        <input
          type="text"
          placeholder="Search for your shoes"
          onChange={handleChange}
          // value={value}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <CiHeart className="nav-icons" />
        </a>
        <a href="#">
          <FaUserAlt className="nav-icons" />
        </a>
        <a href="#">
          <FaShoppingCart className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
