import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import mid_b_12_med from "../../Images/Bathroom/mid-b-12-med.jpg";
import mid_b_12_thumb from "../../Images/Bathroom/mid-b-12-thumb.jpg";
import mid_b_12 from "../../Images/Bathroom/mid-b-12.jpg";
import mid_b_13_med from "../../Images/Bathroom/mid-b-13-med.jpg";
import mid_b_13_thumb from "../../Images/Bathroom/mid-b-13-thumb.jpg";
import mid_b_13 from "../../Images/Bathroom/mid-b-13.jpg";
import mid_b_9_med from "../../Images/Bathroom/mid-b-9-med.jpg";
import mid_b_9_thumb from "../../Images/Bathroom/mid-b-9-med.jpg";
import mid_b_9 from "../../Images/Bathroom/mid-b-9.jpg";
import "../../App.css";
import "../../Gallery.css";
import "../../App.css";
import "../../Gallery.css";
import FadeIn from "react-fade-in";

function ThreeQuarterBathLB() {
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
      <div className="wrapper">
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={500}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_b_12_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_b_9_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_b_13_med} onClick={() => openLightboxOnSlide(3)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[mid_b_12, mid_b_9, mid_b_13]}
        thumbs={[mid_b_12_thumb, mid_b_9_thumb, mid_b_13_thumb]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default ThreeQuarterBathLB;
