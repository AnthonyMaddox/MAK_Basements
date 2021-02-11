import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../App.css";

class Hamburger extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: true,
//     };
//   }
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu isOpen width={"200px"}>
        <Link
          onClick={() => this.closeMenu()}
          className="burgerLink"
          to="/home"
        >
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
