import React, { Component } from "react";
import { Link } from "react-router-dom";
import blue_shark from "../Images/blue_shark.JPG";

class Kitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES</div>
        <h1>This is the Kitchenette page!</h1>
        <p>MAK Basement Remodeling Kitchenette Gallery</p>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/kitchenettes/small">
              <img className="pic" src={blue_shark} alt="small kitchenette" />
              <p>small kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/medium">
              <img className="pic" src={blue_shark} alt="medium kitchenette" />
              <p>medium kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/large">
              <img className="pic" src={blue_shark} alt="large kitchenette" />
              <p>large kitchenette</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Kitchenette;
