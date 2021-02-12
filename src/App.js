import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import logo from "./Images/MAK_Basement_Logo.jpg";
import Home from "./Components/Home";
import Kitchenette from "./Components/Kitchenette";
import Bathroom from "./Components/Bathroom";
import Hamburger from "./Components/Hamburger";
import HalfBath from "./Components/HalfBath";
import ThreeQuarterBath from "./Components/ThreeQuarterBath";
import FullBath from "./Components/FullBath";
import SmallKitchenette from "./Components/SmallKitchenette";
import MediumKitchenette from "./Components/MediumKitchenette";
import LargeKitchenette from "./Components/LargeKitchenette";

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
            <a
              className="aLink"
              href="https://makhomedesign.com/contact/"
              target="_blank"
            >
              <p className="linkText">CONTACT US</p>
            </a>
          </div>
          <div className="hamDiv">
            <Hamburger />
          </div>
        </nav>
        <main>
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/kitchenettes" component={Kitchenette} exact={true} />
          <Route path="/bathrooms" component={Bathroom} exact={true} />
          <Route path="/bathrooms/half" component={HalfBath} exact={true} />
          <Route
            path="/bathrooms/three_quarter"
            component={ThreeQuarterBath}
            exact={true}
          />
          <Route path="/bathrooms/full" component={FullBath} exact={true} />
          <Route
            path="/kitchenettes/small"
            component={SmallKitchenette}
            exact={true}
          />
          <Route
            path="/kitchenettes/medium"
            component={MediumKitchenette}
            exact={true}
          />
          <Route
            path="/kitchenettes/large"
            component={LargeKitchenette}
            exact={true}
          />
        </main>
      </div>
    );
  }
}

export default App;
