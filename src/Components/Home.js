import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
import LightBox from "./LightBox";
import Phone from "./Phone";
import makA_rev from "../Images/makA_rev.png";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="titleBar">
          <span className="titleBarWord">OUR BASEMENTS</span>
        </div>
        <FadeIn transitionDuration={2000} delay={700}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Your Vision Made Clear</div>
        </FadeIn>
        <div>
          <LightBox />
        </div>
        <Phone />
      </div>
    );
  }
}

export default Home;
