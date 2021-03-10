import React, { Component } from "react";
import "../App.css";
import HalfBathLB from "./Galleries/HalfBathLB";

class HalfBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: HALF</div>
        <h1>This is the Half Bath page!</h1>
        <p>MAK Basement Remodeling Half Bathroom Gallery</p>
        <HalfBathLB />
      </div>
    );
  }
}

export default HalfBath;
