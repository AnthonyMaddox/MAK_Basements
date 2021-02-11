import React, { Component } from "react";
import Home from "./Components/Home";
import Kitchenette from "./Components/Kitchenette";
import Bathroom from "./Components/Bathroom";
import Hamburger from "./Components/Hamburger";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import logo from "./Images/MAK_Basement_Logo.jpg";
// import { slide as Menu } from "react-burger-menu";

//route is telling the app what component to render when something is clicked on (defining path)
//Link replaces a tag from traditional html (what to click on to go somewhere)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <nav className="navBar">
          <Link className="navLink" to="/home">
            <div className="logoDiv">
              <img className="logoImg" src={logo} alt="MAK Basements Home" />
            </div>
          </Link>
          <div className="sideNav">
            <Link className="navLink" to="/kitchenettes">
              <p className="linkText">KITCHENETTES</p>
            </Link>
            <Link className="navLink" to="/bathrooms">
              <p className="linkText">BATHROOMS</p>
            </Link>
          </div>
          <div className="hamDiv">
            <Hamburger />
          </div>
        </nav>
        <main>
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/kitchenettes" component={Kitchenette} />
          <Route path="/bathrooms" component={Bathroom} />
        </main>
      </div>
    );
  }
}

export default App;
