import React from "react";
import "./Header.css";
import Github from "./github.png";

function Button({ isHovered, children }) {
  return (
    <a href="">
      <img src={Github} alt="GitHub Logo" />
    </a>
  );
}

export default Button;
