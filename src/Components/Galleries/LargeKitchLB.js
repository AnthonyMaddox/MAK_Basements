import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../../App.css";
import "../../Gallery.css";
import FadeIn from "react-fade-in";
import top_k_2_med from "../../Images/Kitchen/top-k-2-med.jpg";
import top_k_2_thumb from "../../Images/Kitchen/top-k-2-thumb.jpg";
import top_k_2 from "../../Images/Kitchen/top-k-2.jpg";
import top_k_4_med from "../../Images/Kitchen/top-k-4-med.jpg";
import top_k_4_thumb from "../../Images/Kitchen/top-k-4-thumb.jpg";
import top_k_4 from "../../Images/Kitchen/top-k-4.jpg";
import top_k_5_med from "../../Images/Kitchen/top-k-5-med.jpg";
import top_k_5_thumb from "../../Images/Kitchen/top-k-5-thumb.jpg";
import top_k_5 from "../../Images/Kitchen/top-k-5.jpg";
import top_k_6_med from "../../Images/Kitchen/top-k-6-med.jpg";
import top_k_6_thumb from "../../Images/Kitchen/top-k-6-thumb.jpg";
import top_k_6 from "../../Images/Kitchen/top-k-6.jpg";
import top_k_8_med from "../../Images/Kitchen/top-k-8-med.jpg";
import top_k_8_thumb from "../../Images/Kitchen/top-k-8-thumb.jpg";
import top_k_8 from "../../Images/Kitchen/top-k-8.jpg";

function LargeKitchLB() {
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
              <img src={top_k_2_med} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={600}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_k_4_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={900}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_k_5_med} onClick={() => openLightboxOnSlide(3)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1200}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_k_6_med} onClick={() => openLightboxOnSlide(4)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1500}>
            <div className="img-wrap img-hover-zoom">
              <img src={top_k_8_med} onClick={() => openLightboxOnSlide(5)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[top_k_2, top_k_4, top_k_5, top_k_6, top_k_8]}
        thumbs={[
          top_k_2_thumb,
          top_k_4_thumb,
          top_k_5_thumb,
          top_k_6_thumb,
          top_k_8_thumb,
        ]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default LargeKitchLB;
