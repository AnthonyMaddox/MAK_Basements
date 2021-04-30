import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import "./Footer.css";
import logo from "./Images/MAK_Basement_Logo.png";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Kitchenette from "./Components/Kitchenette";
import Bathroom from "./Components/Bathroom";
import Hamburger from "./Components/Hamburger";
import HalfBath from "./Components/HalfBath";
import ThreeQuarterBath from "./Components/ThreeQuarterBath";
import FullBath from "./Components/FullBath";
import SmallKitchenette from "./Components/SmallKitchenette";
import MediumKitchenette from "./Components/MediumKitchenette";
import LargeKitchenette from "./Components/LargeKitchenette";
import { Helmet } from "react-helmet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        {/* <Helmet>
          <title>MAK Basements Home</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Welcome to MAK Home Remodeling Services' Basement Remodeling Gallery. Finishing your basement is an essential part of turning your house into your dream home. We provide design consultation to help your vision become clear and offer the highest quality service and materials available. We service the lower DC and Southern Maryland area."
            data-react-helmet="true"
          />
          <meta
            name="keywords"
            content="mak, M.A.K.,remodeling, services, remodel, construction, basement, basements, finish, finishing, home, maddox"
            data-react-helmet="true"
          />
        </Helmet> */}
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
              href="https://makhomedesign.com/basement-remodeling/#gform_wrapper_2 "
              target="_blank"
            >
              <p className="alinkText">CONTACT US</p>
            </a>
          </div>
          <div className="hamDiv">
            <Hamburger />
          </div>
        </nav>
        <main id="page-wrap">
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/kitchenettes" component={Kitchenette} exact={true} />
          <Route path="/bathrooms" component={Bathroom} exact={true} />
          <Route path="/bathrooms/powder" component={HalfBath} exact={true} />
          <Route
            path="/bathrooms/mid"
            component={ThreeQuarterBath}
            exact={true}
          />
          <Route path="/bathrooms/top" component={FullBath} exact={true} />
          <Route
            path="/kitchenettes/starter"
            component={SmallKitchenette}
            exact={true}
          />
          <Route
            path="/kitchenettes/mid"
            component={MediumKitchenette}
            exact={true}
          />
          <Route
            path="/kitchenettes/top"
            component={LargeKitchenette}
            exact={true}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
