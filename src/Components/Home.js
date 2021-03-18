import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
import LightBox from "./LightBox";
import Phone from "./Phone";


class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="titleBar">
          <span className="titleBarWord">BASEMENTS</span>
        </div>
        <FadeIn transitionDuration={2000} delay={1300}>
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
