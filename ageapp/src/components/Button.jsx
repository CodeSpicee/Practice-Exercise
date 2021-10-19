import React from "react";

const Button = ({ handleClick, text }) => {
  return (
    <div className="button">
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default Button;
