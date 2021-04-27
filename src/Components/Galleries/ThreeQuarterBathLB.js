import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import bg from "../../Images/basement_bg.jpg";
import mid_b_3_med from "../../Images/Bathroom/mid-b-3-med.jpg";
import mid_b_3_thumb from "../../Images/Bathroom/mid-b-3-thumb.jpg";
import mid_b_3 from "../../Images/Bathroom/mid-b-3.jpg";
import mid_b_6_med from "../../Images/Bathroom/mid-b-6-med.jpg";
import mid_b_6_thumb from "../../Images/Bathroom/mid-b-6-thumb.jpg";
import mid_b_6 from "../../Images/Bathroom/mid-b-6.jpg";
import mid_b_8_med from "../../Images/Bathroom/mid-b-8-med.jpg";
import mid_b_8_thumb from "../../Images/Bathroom/mid-b-8-med.jpg";
import mid_b_8 from "../../Images/Bathroom/mid-b-8.jpg";
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
              <img src={mid_b_3_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_b_8_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_b_6_med} onClick={() => openLightboxOnSlide(3)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[mid_b_3, mid_b_8, mid_b_6]}
        thumbs={[mid_b_3_thumb, mid_b_8_thumb, mid_b_6_thumb ]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default ThreeQuarterBathLB;
