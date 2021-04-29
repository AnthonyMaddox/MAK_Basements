import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ThreeQuarterBathLB from "./Galleries/ThreeQuarterBathLB";
import makA_rev from "../Images/makA_rev.png";
import FadeIn from "react-fade-in";
import Phone from "./Phone";
import BackButton from "./BackButton";

class ThreeQuarterBath extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS: MID-TIER</div>
        <Link to="/bathrooms">
          <BackButton BackButtonText="Back to Bathrooms" />
        </Link>
        <FadeIn transitionDuration={2000} delay={700}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Compact Design</div>
        </FadeIn>
        <ThreeQuarterBathLB />
        <div className="descriptionDiv">
          WHAT DOES OUR MID-TIER BATHROOM INCLUDE?
          <br></br>
          <br></br>Our mid-tier bathroom parallels the traditional three-quarter
          bathroom. It differs in that it includes a composite shower and tub
          combination porcelain insert giving the bathroom the functionality of
          a full-bath yet maintaining a compact size.
          <br></br>
          <br></br>
          Our mid-tier bathroom does not include tiling on the walls.
          <br></br>
          <br></br>
          We provide consultation with design and product selection:
          <ul>
            <li className="dList">Porcelain Shower/Tub Insert</li>
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

export default ThreeQuarterBath;
