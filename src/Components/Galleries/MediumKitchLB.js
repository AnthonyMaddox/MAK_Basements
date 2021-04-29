import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../../App.css";
import "../../Gallery.css";
import FadeIn from "react-fade-in";
import mid_k_2_med from "../../Images/Kitchen/mid-k-2-med.jpg";
import mid_k_2_thumb from "../../Images/Kitchen/mid-k-2-thumb.jpg";
import mid_k_2 from "../../Images/Kitchen/mid-k-2.jpg";
import mid_k_1_med from "../../Images/Kitchen/mid-k-1-med.jpg";
import mid_k_1_thumb from "../../Images/Kitchen/mid-k-1-thumb.jpg";
import mid_k_1 from "../../Images/Kitchen/mid-k-1.jpg";
import mid_k_10_med from "../../Images/Kitchen/mid-k-10-med.png";
import mid_k_10_thumb from "../../Images/Kitchen/mid-k-10-thumb.png";
import mid_k_10 from "../../Images/Kitchen/mid-k-10.png";

function MediumKitchLB() {
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
              <img src={mid_k_10_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={500}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_k_2_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={mid_k_1_med} onClick={() => openLightboxOnSlide(3)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[mid_k_10, mid_k_2, mid_k_1]}
        thumbs={[mid_k_10_thumb, mid_k_2_thumb, mid_k_1_thumb]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default MediumKitchLB;
