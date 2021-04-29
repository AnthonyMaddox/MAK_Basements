import React from "react";

import "../App.css";
import back_arrow from "../Images/back_arrow.png";

function BackButton(props) {
  return (
    <div className="BackButtonDiv">
      <div className="backText">{props.BackButtonText}</div>&nbsp;
      <img className="backImage" src={back_arrow} alt="back button image" />
    </div>
  );
}
export default BackButton;
