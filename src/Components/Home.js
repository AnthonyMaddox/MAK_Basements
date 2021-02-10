import React, { Component } from "react";
import blue_shark from "../Images/blue_shark.JPG";
import "../App.css";
import ModalImage from "react-modal-image";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="titleBar">BASEMENTS</div>
        <div className="gallery">
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
        </div>
      </div>
    );
  }
}

export default Home;
