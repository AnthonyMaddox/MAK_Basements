import React, { Component } from "react";
import "../App.css";
import FadeIn from "react-fade-in";
import LightBox from "./LightBox";
import Phone from "./Phone";
import makA_rev from "../Images/makA_rev.png";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="titleBar">
          <span className="titleBarWord">OUR BASEMENTS</span>
        </div>
        <FadeIn transitionDuration={2000} delay={700}>
          <img className="makA_rev" src={makA_rev} alt="makA" />
          <div className="quote">Your Vision Made Clear</div>
        </FadeIn>
        <div>
          <LightBox />
        </div>
        <Phone />
      </div>
    );
  }
}

export default Home;

// Google Webmaster tools

//<!-- Global site tag (gtag.js) - Google Ads: 996889050 -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=AW-996889050"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'AW-996889050');
// </script>

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-50811956-2"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-50811956-2');
// </script>