import React from "react";

import "../App.css";
import back from "../Images/back.png";

function BackButton(props) {
  return (
    <div className="BackButtonDiv">
      <img className="backImage" src={back} alt="back button image" />
      &nbsp;
      <div className="backText">{props.BackButtonText}</div>
    </div>
  );
}
export default BackButton;

