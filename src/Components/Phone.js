import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
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
      </div>
    );
  }
}

export default Phone;
