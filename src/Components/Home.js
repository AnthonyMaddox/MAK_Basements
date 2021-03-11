import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
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
        <FadeIn transitionDuration={2000} delay={1300}>
          <div className="quote">Your Vision Made Clear</div>
        </FadeIn>
        <div>
          <LightBox />
        </div>
        <div className="phoneDiv">
          <ScrollAnimation animateIn="fadeIn">
            <p className="phonePara">
              Give us a call to schedule your{" "}
              <span className="inHome">In-Home-Consultation!</span>
            </p>
          </ScrollAnimation>
          <ScrollAnimation offset="75" animateIn="bounceInRight">
            <a className="phoneLink" href="tel:240-766-4873">
              <ScrollAnimation offset="75" delay="1200" animateIn="tada">
                <FontAwesomeIcon className="phoneIcon" icon="phone" />
              </ScrollAnimation>
              (240) 766-4873
            </a>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Home;
