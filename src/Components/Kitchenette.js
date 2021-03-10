import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <img
                className="pic"
                src="https://picsum.photos/270/172"
                alt="small kitchenette"
              />
              <p>small kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/medium">
              <img
                className="pic"
                src="https://picsum.photos/270/171"
                alt="medium kitchenette"
              />
              <p>medium kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/large">
              <img
                className="pic"
                src="https://picsum.photos/270/170"
                alt="large kitchenette"
              />
              <p>large kitchenette</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Kitchenette;
