import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../../App.css";
import "../../Gallery.css";
import FadeIn from "react-fade-in";
import start_k_8_med from "../../Images/Kitchen/start-k-8-med.jpg";
import start_k_8_thumb from "../../Images/Kitchen/start-k-8-thumb.jpg";
import start_k_8 from "../../Images/Kitchen/start-k-8.jpg";
import start_k_9_med from "../../Images/Kitchen/start-k-9-med.jpg";
import start_k_9_thumb from "../../Images/Kitchen/start-k-9-thumb.jpg";
import start_k_9 from "../../Images/Kitchen/start-k-9.jpg";

function SmallKitchLB() {
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
              <img src={start_k_8_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={start_k_9_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[start_k_8, start_k_9]}
        thumbs={[start_k_8_thumb, start_k_9_thumb]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default SmallKitchLB;
