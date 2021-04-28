import React, { Component } from "react";
import "../App.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

class Phone extends Component {
  render() {
    return (
      <div className="phoneDiv">
        <ScrollAnimation animateIn="fadeIn">
          <p className="phonePara">
            Give us a call to schedule your{" "}
            <span className="inHome">In-Home-Consultation!</span>
          </p>
        </ScrollAnimation>
        <ScrollAnimation offset="75" animateIn="bounceInRight">
          <a className="phoneLink" href="tel:240-766-4873">
            {/* <ScrollAnimation
              offset="75"
              initiallyVisible={true}
              delay="1000"
              animateIn="tada"
            > */}
            <FontAwesomeIcon className="phoneIcon" icon="phone" />
            {/* </ScrollAnimation> */}
            (240) 766-4873
          </a>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Phone;

{
  /* <div className="phoneDiv">
        <FadeIn transitionDuration={2000} delay={2500}>
          <p className="phonePara">
            Give us a call to schedule your{" "}
            <span className="inHome">In-Home-Consultation!</span>
          </p>
        </FadeIn>
        <a className="phoneLink" href="tel:240-766-4873">
          <FontAwesomeIcon className="phoneIcon" icon="phone" />
          (240) 766-4873
        </a>
      </div> */
}
