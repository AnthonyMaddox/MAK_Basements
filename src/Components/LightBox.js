import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import blue_shark from "../Images/blue_shark.JPG";
import bg from "../Images/basement_bg.jpg";
import "../App.css";

function LightBox() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  //   const [toggler, setToggler] = useState(false);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <div>
        <img
          className="lbPic"
          src={blue_shark}
          onClick={() => openLightboxOnSlide(1)}
        />
      </div>
      <div>
        <img
          className="lbPic"
          src={bg}
          onClick={() => openLightboxOnSlide(2)}
        />
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[blue_shark, bg]}
        thumbs={[blue_shark, bg]}
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        slide={lightboxController.slide}
      />
    </>
  );
}
export default LightBox;
