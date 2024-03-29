import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import pow_3_med from "../../Images/Bathroom/pow-3-med.jpg";
import pow_3_thumb from "../../Images/Bathroom/pow-3-thumb.jpg";
import pow_3 from "../../Images/Bathroom/pow-3.jpg";
import pow_2_med from "../../Images/Bathroom/pow-2-med.jpg";
import pow_2_thumb from "../../Images/Bathroom/pow-2-thumb.jpg";
import pow_2 from "../../Images/Bathroom/pow-2.jpg";
import pow_7_med from "../../Images/Bathroom/pow-7-med.jpg";
import pow_7_thumb from "../../Images/Bathroom/pow-7-thumb.jpg";
import pow_7 from "../../Images/Bathroom/pow-7.jpg";
import pow_13_med from "../../Images/Bathroom/pow-13-med.jpg";
import pow_13_thumb from "../../Images/Bathroom/pow-13-thumb.jpg";
import pow_13 from "../../Images/Bathroom/pow-13.jpg";
import pow_4_med from "../../Images/Bathroom/pow-4-med.jpg";
import pow_4_thumb from "../../Images/Bathroom/pow-4-thumb.jpg";
import pow_4 from "../../Images/Bathroom/pow-4.jpg";
import "../../App.css";
import "../../Gallery.css";
import FadeIn from "react-fade-in";

function HalfBathLB() {
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
              <img src={pow_3_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={pow_2_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={pow_7_med} onClick={() => openLightboxOnSlide(3)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={pow_13_med} onClick={() => openLightboxOnSlide(4)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={pow_4_med} onClick={() => openLightboxOnSlide(5)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[pow_3, pow_2, pow_7, pow_13, pow_4]}
        thumbs={[
          pow_3_thumb,
          pow_2_thumb,
          pow_7_thumb,
          pow_13_thumb,
          pow_4_thumb,
        ]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default HalfBathLB;
