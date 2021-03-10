import React, { Component } from "react";
import "../App.css";
import ThreeQuarterBathLB from "./Galleries/ThreeQuarterBathLB";

class ThreeQuarterBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: THREE-QUARTER</div>
        <h1>This is the Three Quarter Bath page!</h1>
        <p>MAK Basement Remodeling Three Quarter Bathroom Gallery</p>
        <ThreeQuarterBathLB />
      </div>
    );
  }
}

export default ThreeQuarterBath;
