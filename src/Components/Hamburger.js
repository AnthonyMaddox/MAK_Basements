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
    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: true });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
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
