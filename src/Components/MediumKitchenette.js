import React, { Component } from "react";
import "../App.css";
import MediumKitchLB from "./Galleries/MediumKitchLB";

class MediumKitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES: MEDIUM</div>
        <h1>This is the Medium Kitchenettes page!</h1>
        <p>MAK Basement Remodeling Medium Kitchenettes Gallery</p>
        <MediumKitchLB />
      </div>
    );
  }
}

export default MediumKitchenette;
