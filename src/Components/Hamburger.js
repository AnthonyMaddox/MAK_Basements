import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../App.css";

class Hamburger extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu width={"200px"}>
        <Link className="burgerLink" to="/home">
          <p className="linkText">HOME</p>
        </Link>
        <Link className="burgerLink" to="/kitchenettes">
          <p className="linkText">KITCHENETTES</p>
        </Link>
        <Link className="burgerLink" to="/bathrooms">
          <p className="linkText">BATHROOMS</p>
        </Link>
      </Menu>
    );
  }
}

export default Hamburger;
