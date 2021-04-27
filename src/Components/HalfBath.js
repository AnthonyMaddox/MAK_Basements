import React, { Component } from "react";
import "../App.css";
import HalfBathLB from "./Galleries/HalfBathLB";
// import Phone from "./Phone";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => Icons[icon]);

library.add(...iconList);

class HalfBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: POWDER ROOM</div>
        <HalfBathLB />
        <div className="descriptionDiv">
          WHAT IS A POWDER ROOM?
          <br></br>
          <br></br>A powder room is also known as a half-bath or guest bathroom.
          It contains two of the main bathroom components, most common are a
          toilet and sink. The powder room can be located on any level of the
          home.
          <br></br>
          <br></br>
          Adding a powder room to your basement can greatly increase its
          convenience and be one of the most profitable improvements you can
          make.
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

export default HalfBath;
