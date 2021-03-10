import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import bg from "../../Images/basement_bg.jpg";
import "../../App.css";
import "../../Gallery.css";
import FadeIn from "react-fade-in";

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
          <FadeIn transitionDuration={2000} delay={500}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/180"
                onClick={() => openLightboxOnSlide(1)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={600}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/179"
                onClick={() => openLightboxOnSlide(2)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={700}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/178"
                onClick={() => openLightboxOnSlide(3)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={800}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/177"
                onClick={() => openLightboxOnSlide(4)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={900}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/176"
                onClick={() => openLightboxOnSlide(5)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/175"
                onClick={() => openLightboxOnSlide(6)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/174"
                onClick={() => openLightboxOnSlide(7)}
              />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[
          "https://picsum.photos/270/180",
          "https://picsum.photos/270/179",
          "https://picsum.photos/270/178",
          "https://picsum.photos/270/177",
          "https://picsum.photos/270/176",
          "https://picsum.photos/270/175",
          "https://picsum.photos/270/174",
        ]}
        thumbs={[bg]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default LargeKitchLB;