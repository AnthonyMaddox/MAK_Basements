import React, { Component } from "react";
import "../App.css";
import LargeKitchLB from "./Galleries/LargeKitchLB";

class LargeKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: LARGE</div>
        <h1>This is the Large Kitchenette page!</h1>
        <p>MAK Basement Remodeling Large Kitchenette Gallery</p>
        <LargeKitchLB />
      </div>
    );
  }
}

export default LargeKitchenette;
