import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "../App.css";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
    };
    // this.handleStateChange = this.handleStateChange.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    // this.toggleMenu = this.toggleMenu.bind(this);
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: true });
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
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        width={"200px"}
      >
        <Link
          onClick={() => this.closeMenu()}
          className="burgerLink"
          to="/home"
        >
          <p className="linkText">HOME</p>
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
      </Menu>
    );
  }
}

export default Hamburger;
