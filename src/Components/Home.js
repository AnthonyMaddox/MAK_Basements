import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
import LightBox from "./LightBox"

class Home extends Component {
    
  render() {
    return (
      <div className="homePage">
        <div className="titleBar">BASEMENTS</div>
        <FadeIn transitionDuration={2000} delay={1000}>
          <div className="quote">Your Vision Made Clear</div>
        </FadeIn>
        <div>
        <LightBox/>
        </div>
      </div>
    );
  }
}

export default Home;
