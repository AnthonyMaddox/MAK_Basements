import React, { Component } from "react";
import Home from "./Components/Home";
import Kitchenette from "./Components/Kitchenette";
import Bathroom from "./Components/Bathroom";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
//route is telling the app what component to render when something is clicked on (defining path)
//Link replaces a tag from traditional html (what to click on to go somewhere)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div>
        <nav>
          <Link to="/home">
            <h1>MAK Basements Home</h1>
          </Link>

          <Link to="/kitchenettes">
            <h1>Kitchenettes</h1>
          </Link>
          <Link to="/bathrooms">
            <h1>Bathrooms</h1>
          </Link>
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
