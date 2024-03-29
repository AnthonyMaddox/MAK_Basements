import React, { Component } from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../App.css";
import MAK_A from "../Images/MAK_A.png";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    // this.handleStateChange = this.handleStateChange.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    // this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        disableAutoFocus
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        width={"200px"}
      >
        <Link onClick={() => this.closeMenu()} to="/home">
          <p className="burgerHomeLink">HOME</p>
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="burgerLink"
          to="/kitchenettes"
        >
          <p className="linkText">KITCHENETTES</p>
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="burgerLink"
          to="/bathrooms"
        >
          <p className="linkText">BATHROOMS</p>
        </Link>
        <a
          className="burgerLink"
          href="https://makhomedesign.com/basement-remodeling/#gform_wrapper_2 "
          target="_blank"
        >
          <p className="linkText">CONTACT US</p>
        </a>
        
        <a
          href="https://makhomedesign.com/"
          target="_blank"
          className="mainSiteLink"
    
        >
            <div>
          <img className="makA" src={MAK_A} alt="the A" />
        </div>
          <p className="mainSite">Visit Our Main Site!</p>
        </a>
      </Menu>
    );
  }
}

export default Hamburger;
