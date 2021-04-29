import React, { Component } from "react";
import { Link } from "react-router-dom";
import makA_rev from "../Images/makA_rev.png";
import mid_k_2_med from "../Images/Kitchen/mid-k-2-med.jpg";
import start_k_8_med from "../Images/Kitchen/start-k-8-med.jpg";
import top_k_4_med from "../Images/Kitchen/top-k-4-med.jpg";

class Kitchenette extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">KITCHENETTES</div>
        <img className="makA_rev" src={makA_rev} alt="makA" />
        <div className="quote">Establish Utility</div>
        <div className="gallery">
          <div>
            <Link className="subLink" to="/kitchenettes/small">
              <img
                className="pic"
                src={start_k_8_med}
                alt="small kitchenette"
              />
              <p className="selectorSub">Starter Kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/medium">
              <img className="pic" src={mid_k_2_med} alt="medium kitchenette" />
              <p className="selectorSub">Mid-Tier Kitchenette</p>
            </Link>
          </div>
          <div>
            <Link className="subLink" to="/kitchenettes/large">
              <img className="pic" src={top_k_4_med} alt="large kitchenette" />
              <p className="selectorSub">Top-Tier Kitchenette</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Kitchenette;
