import React, { Component } from "react";
import "../App.css";
import FullBathLB from "./Galleries/FullBathLB";

class FullBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: FULL</div>
        <h1>This is the Full Bath page!</h1>
        <p>MAK Basement Remodeling Full Bathroom Gallery</p>
        <FullBathLB />
      </div>
    );
  }
}

export default FullBath;
