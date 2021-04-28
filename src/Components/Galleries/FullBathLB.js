import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import top_b_11 from "../../Images/Bathroom/top-b-11.jpg";
import top_b_11_thumb from "../../Images/Bathroom/top-b-11-thumb.jpg";
import top_b_11_med from "../../Images/Bathroom/top-b-11-med.jpg";
import top_b_6 from "../../Images/Bathroom/top-b-6.jpg";
import top_b_6_thumb from "../../Images/Bathroom/top-b-6-thumb.jpg";
import top_b_6_med from "../../Images/Bathroom/top-b-6-med.jpg";
import top_b_3 from "../../Images/Bathroom/top-b-3.jpg";
import top_b_3_thumb from "../../Images/Bathroom/top-b-3-thumb.jpg";
import top_b_3_med from "../../Images/Bathroom/top-b-3-med.jpg";
import top_b_8 from "../../Images/Bathroom/top-b-8.jpg";
import top_b_8_thumb from "../../Images/Bathroom/top-b-8-thumb.jpg";
import top_b_8_med from "../../Images/Bathroom/top-b-8-med.jpg";
import top_b_5 from "../../Images/Bathroom/top-b-5.jpg";
import top_b_5_thumb from "../../Images/Bathroom/top-b-5-thumb.jpg";
import top_b_5_med from "../../Images/Bathroom/top-b-5-med.jpg";
import top_b_9 from "../../Images/Bathroom/top-b-9.jpg";
import top_b_9_thumb from "../../Images/Bathroom/top-b-9-thumb.jpg";
import top_b_9_med from "../../Images/Bathroom/top-b-9-med.jpg";
import top_b_10 from "../../Images/Bathroom/top-b-10.jpg";
import top_b_10_thumb from "../../Images/Bathroom/top-b-10-thumb.jpg";
import top_b_10_med from "../../Images/Bathroom/top-b-10-med.jpg";
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
          <FadeIn transitionDuration={2000} delay={300}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_6_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={600}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_3_med} onClick={() => openLightboxOnSlide(3)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={900}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_8_med} onClick={() => openLightboxOnSlide(4)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1200}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_5_med} onClick={() => openLightboxOnSlide(5)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_9_med} onClick={() => openLightboxOnSlide(6)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1800}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_10_med} onClick={() => openLightboxOnSlide(7)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={2300}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_b_11_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[
          top_b_11,
          top_b_6,
          top_b_3,
          top_b_8,
          top_b_5,
          top_b_9,
          top_b_10,
        ]}
        thumbs={[
          top_b_11_thumb,
          top_b_6_thumb,
          top_b_3_thumb,
          top_b_8_thumb,
          top_b_5_thumb,
          top_b_9_thumb,
          top_b_10_thumb,
        ]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default HalfBathLB;
