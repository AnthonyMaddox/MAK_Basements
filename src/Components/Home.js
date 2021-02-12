import React, { Component } from "react";
import blue_shark from "../Images/blue_shark.JPG";
import "../App.css";
import ModalImage from "react-modal-image";
import FadeIn from "react-fade-in";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="titleBar">BASEMENTS</div>
        <FadeIn transitionDuration={2000} delay={1000}>
          <div className="quote">VISIONS BROUGHT TO LIFE</div>
        </FadeIn>
        <div>
          <FadeIn className="gallery" delay={200} transitionDuration={2000}>
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
            <ModalImage
              className="pic"
              small={blue_shark}
              large={blue_shark}
              hideDownload="true"
            />
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default Home;
