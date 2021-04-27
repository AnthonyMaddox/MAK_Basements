import React, { Component } from "react";
import "../App.css";
import ThreeQuarterBathLB from "./Galleries/ThreeQuarterBathLB";
import FadeIn from "react-fade-in";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

class ThreeQuarterBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: MID-TIER</div>
        <FadeIn transitionDuration={2000} delay={1500}>
          <div className="quote">The Perfect Fit</div>
        </FadeIn>
        <ThreeQuarterBathLB />
        <div className="descriptionDiv">
          WHAT DOES OUR MID-TIER BATHROOM INCLUDE?
          <br></br>
          <br></br>Our mid-tier bathroom parallels the traditional three-quarter bathroom.
          It contains three of the main bathroom components, a sink, toilet and either a walk-in shower or an isolated bath tub. 
          <br></br>
          <br></br>
          A walk-in shower is more commonly found in modern homes and tubs in older houses. New owners often upgrade bathrooms with isolated tubs to full bathrooms by installing a shower head above the tub with a curtain enclosure.   
          <br></br>
          <br></br>
          We provide consultation with design and product selection:
          <ul>
            <li className="dList">Luxury Vinyl Tile (LVT) Flooring</li>
            <li className="dList">Ceramic Tile</li>
            <li className="dList">Recessed Lighting</li>
            <li className="dList">Hand Picked Cabinetry/Vanity</li>
            <li className="dList">Vanity Mirrors</li>
            <li className="dList">Countertops</li>
            <li className="dList">Shower Heads and Rails</li>
            <li className="dList">Glass Shower Doors</li>
            <li className="dList">Toilets</li>
          </ul>
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
              <ScrollAnimation
                offset="75"
                initiallyVisible={true}
                delay="1000"
                animateIn="tada"
              >
                <FontAwesomeIcon className="phoneIcon" icon="phone-alt" />
              </ScrollAnimation>
              (240) 766-4873
            </a>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default ThreeQuarterBath;
