import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
import LightBox from "./LightBox";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="titleBar">BASEMENTS</div>
        <FadeIn transitionDuration={2000} delay={1000}>
          <div className="quote">Your Vision Made Clear</div>
        </FadeIn>
        <div>
          <LightBox />
        </div>
        <div className="phoneDiv">
          <p className="phonePara">
            Give us a call to schedule your{" "}
            <span className="inHome">In-Home-Consultation!</span>
          </p>

          <a className="phoneLink" href="tel:541-728-1280">
            <FontAwesomeIcon className="phoneIcon" icon="phone" />
            541-728-1280
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
