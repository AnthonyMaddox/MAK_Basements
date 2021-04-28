import React, { Component } from "react";
import "../App.css";
import HalfBathLB from "./Galleries/HalfBathLB";
import makA_rev from "../Images/makA_rev.png";
import FadeIn from "react-fade-in";
import Phone from "./Phone";

class HalfBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: POWDER ROOM</div>

        <FadeIn transitionDuration={2000} delay={1000}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">The Essentials</div>
        </FadeIn>
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
            <li className="dList">Recessed Lighting</li>
            <li className="dList">Hand Picked Cabinetry/Vanity</li>
            <li className="dList">Vanity Mirrors</li>
            <li className="dList">Countertops</li>
            <li className="dList">Toilets</li>
          </ul>
        </div>
        <Phone />
      </div>
    );
  }
}

export default HalfBath;
