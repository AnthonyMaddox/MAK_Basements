import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import FullBathLB from "./Galleries/FullBathLB";
import FadeIn from "react-fade-in";
import makA_rev from "../Images/makA_rev.png";
import Phone from "./Phone";
import BackButton from "./BackButton"

class FullBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: TOP-TIER</div>
        <Link to="/bathrooms">
          <BackButton BackButtonText="Back to Bathrooms" />
        </Link>
        <FadeIn transitionDuration={2000} delay={700}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Complete Comfort</div>
        </FadeIn>
        <FullBathLB />
        <div className="descriptionDiv">
          WHAT DOES OUR TOP-TIER BATHROOM INCLUDE?
          <br></br>
          <br></br>Our top-tier bathroom etends the concept of a full-bathroom. It includes tiling on the walls around a shower or bathtub and allows for a combination or stand alone shower and tub.
          <br></br>
          <br></br>
          Bring your vision of comfort to life with no exceptions.
          <br></br>
          <br></br>
          We provide consultation with design and product selection:
          <ul>
            <li className="dList">Cermaic Tile</li>
            <li className="dList">Glass Shower Doors</li>
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

export default FullBath;
