import React, { Component } from "react";
import "../App.css";
import SmallKitchLB from "./Galleries/SmallKitchLB";

class SmallKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: SMALL</div>
        <h1>This is the Small Kitchenette page!</h1>
        <p>MAK Basement Remodeling Small Kitchenette Gallery</p>
        <SmallKitchLB />
      </div>
    );
  }
}

export default SmallKitchenette;
