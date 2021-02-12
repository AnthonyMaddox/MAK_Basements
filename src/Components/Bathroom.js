import React, { Component } from "react";
import { Link } from "react-router-dom";
import blue_shark from "../Images/blue_shark.JPG";

class Bathroom extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS</div>
        <h1>This is the Bathroom page!</h1>
        <p>MAK Basement Remodeling Bathroom Gallery</p>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/bathrooms/half_bath">
              <img className="pic" src={blue_shark} alt="half bath" />
              <p>half bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/three_quarter_bath">
              <img className="pic" src={blue_shark} alt="three quarter bath" />
              <p>three quarter bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/full_bath">
              <img className="pic" src={blue_shark} alt="full bath" />
              <p>full bath</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bathroom;
