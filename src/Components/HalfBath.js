import React, { Component } from "react";
import "../App.css";
import HalfBathLB from "./Galleries/HalfBathLB";
import FadeIn from "react-fade-in";
import Phone from "./Phone";

class HalfBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: POWDER ROOM</div>
        <Phone />
        <HalfBathLB />
      </div>
    );
  }
}

export default HalfBath;
