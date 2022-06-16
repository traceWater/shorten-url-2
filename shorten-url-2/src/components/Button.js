import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn ${props.btnStyle} ${props.btnSize} ${props.btnColour}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
