import React, { Component } from "react";
import { Link } from "react-router-dom";

class Bathroom extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BATHROOMS</div>
        <h1 className="selectorTitle">Maximize Convienience:</h1>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/bathrooms/half">
              <img
                className="pic"
                src="https://picsum.photos/270/172"
                alt="half bath"
              />
              <p className="selectorSub">Half-Bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/three_quarter">
              <img
                className="pic"
                src="https://picsum.photos/270/171"
                alt="three quarter bath"
              />
              <p className="selectorSub">Three-Quarter-Bath</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/bathrooms/full">
              <img
                className="pic"
                src="https://picsum.photos/270/170"
                alt="full bath"
              />
              <p className="selectorSub">Full Bathroom</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bathroom;
