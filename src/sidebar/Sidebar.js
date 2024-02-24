import React from "react";
import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Color from "./color/Color";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div class="logo-container">
        <h2>🛒</h2>
      </div>
      <Category />
      <Price />
      <Color />
    </div>
  );
};

export default Sidebar;
