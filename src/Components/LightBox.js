import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import bg from "../Images/basement_bg.jpg";
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
          <FadeIn transitionDuration={2000} delay={300}>
            <div className="img-wrap img-hover-zoom">
              <div>
                <img
                  src="https://st.hzcdn.com/simgs/0f518a290d77e881_8-0761/home-design.jpg"
                  alt=""
                  onClick={() => openLightboxOnSlide(1)}
                />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={400}>
            <div className="img-wrap img-hover-zoom">
              <div>
                <img
                  src="https://st.hzcdn.com/simgs/pictures/basements/fort-washington-md-m-a-k-remodeling-services-img~1eb14cc10e78bdb9_8-1178-1-b2ed950.jpg"
                  alt=""
                  onClick={() => openLightboxOnSlide(2)}
                />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={600}>
            <div className="img-wrap img-hover-zoom">
              <div>
                <img
                  src="https://st.hzcdn.com/simgs/pictures/basements/fort-washington-md-m-a-k-remodeling-services-img~73418bf00e78bdbd_8-1522-1-6033263.jpg"
                  onClick={() => openLightboxOnSlide(3)}
                />
              </div>
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
          <FadeIn transitionDuration={2000} delay={1100}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/174"
                onClick={() => openLightboxOnSlide(7)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1200}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/173"
                onClick={() => openLightboxOnSlide(8)}
              />
            </div>
          </FadeIn>
        </div>
        <div className="img-item img-hover-zoom">
          <FadeIn transitionDuration={2000} delay={1300}>
            <div className="img-wrap img-hover-zoom">
              <img
                src="https://picsum.photos/270/172"
                onClick={() => openLightboxOnSlide(9)}
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
          "https://picsum.photos/270/173",
          "https://picsum.photos/270/172",
        ]}
        thumbs={[bg]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default LightBox;
