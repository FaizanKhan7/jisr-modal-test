import React from "react";
import "./Button.css";

function Button({ handleClick, title, buttonStyle }) {
  return (
    <button
      className={
        buttonStyle === "primary" ? "primaryButton" : "secondaryButton"
      }
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default Button;
