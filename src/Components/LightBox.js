import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import blue_shark from "../Images/blue_shark.JPG";
import bg from "../Images/basement_bg.jpg";
// import ResponsiveGallery from "react-responsive-gallery";
import "../App.css";
import "../Gallery.css";
import FadeIn from "react-fade-in";

function LightBox() {
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
              <img src={blue_shark} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={600}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/180"
                onClick={() => openLightboxOnSlide(3)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={700}>
            <div className="img-wrap img-hover-zoom">
              <img src={blue_shark} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={800}>
            <div className="img-wrap img-hover-zoom">
              <img src={blue_shark} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={900}>
            <div className="img-wrap img-hover-zoom">
              <img src={blue_shark} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={blue_shark} onClick={() => openLightboxOnSlide(1)} />
            </div>
          </FadeIn>
        </div>
      </div>

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
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[blue_shark, bg, "https://picsum.photos/270/180"]}
        // thumbs={[blue_shark, bg]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default LightBox;
