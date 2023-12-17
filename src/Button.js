import React from "react";
import "./Header.css";
import Github from "./github.png";

function Button({ link, xmlns, path }) {
  return (
    <a href={link}>
      <svg
        className="button"
        xmlns={xmlns}
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

export default Button;
