import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "../App.css";
import "../Gallery.css";
import FadeIn from "react-fade-in";
import b3_med from "../Images/Home/b3-med.jpg";
import b3_thumb from "../Images/Home/b3-thumb.jpg";
import b3 from "../Images/Home/b3.jpg";
import b1_med from "../Images/Home/b1-med.jpg";
import b1_thumb from "../Images/Home/b1-thumb.jpg";
import b1 from "../Images/Home/b1.jpg";
import b2_med from "../Images/Home/b2-med.jpg";
import b2_thumb from "../Images/Home/b2-thumb.jpg";
import b2 from "../Images/Home/b2.jpg";
import b4_med from "../Images/Home/b4-med.jpg";
import b4_thumb from "../Images/Home/b4-thumb.jpg";
import b4 from "../Images/Home/b4.jpg";
import b5_med from "../Images/Home/b5-med.jpg";
import b5_thumb from "../Images/Home/b5-thumb.jpg";
import b5 from "../Images/Home/b5.jpg";
import b6_med from "../Images/Home/b6-med.jpg";
import b6_thumb from "../Images/Home/b6-thumb.jpg";
import b6 from "../Images/Home/b6.jpg";
import b8_med from "../Images/Home/b8-med.jpg";
import b8_thumb from "../Images/Home/b8-thumb.jpg";
import b8 from "../Images/Home/b8.jpg";
import b7_med from "../Images/Home/b7-med.jpg";
import b7_thumb from "../Images/Home/b7-thumb.jpg";
import b7 from "../Images/Home/b7.jpg";
import b9_med from "../Images/Home/b9-med.jpg";
import b9_thumb from "../Images/Home/b9-thumb.jpg";
import b9 from "../Images/Home/b9.jpg";
import b10_med from "../Images/Home/b10-med.jpg";
import b10_thumb from "../Images/Home/b10-thumb.jpg";
import b10 from "../Images/Home/b10.jpg";
import b11_med from "../Images/Home/b11-med.jpg";
import b11_thumb from "../Images/Home/b11-thumb.jpg";
import b11 from "../Images/Home/b11.jpg";
import b12_med from "../Images/Home/b12-med.jpg";
import b12_thumb from "../Images/Home/b12-thumb.jpg";
import b12 from "../Images/Home/b12.jpg";
import b13_med from "../Images/Home/b13-med.jpg";
import b13_thumb from "../Images/Home/b13-thumb.jpg";
import b13 from "../Images/Home/b13.jpg";
import b14_med from "../Images/Home/b14-med.jpg";
import b14_thumb from "../Images/Home/b14-thumb.jpg";
import b14 from "../Images/Home/b14.jpg";
import b15_med from "../Images/Home/b15-med.jpg";
import b15_thumb from "../Images/Home/b15-thumb.jpg";
import b15 from "../Images/Home/b15.jpg";
import b16_med from "../Images/Home/b16-med.png";
import b16_thumb from "../Images/Home/b16-thumb.png";
import b16 from "../Images/Home/b16.png";
import b17_med from "../Images/Home/b17-med.jpg";
import b17_thumb from "../Images/Home/b17-thumb.jpg";
import b17 from "../Images/Home/b17.jpg";

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
          <FadeIn transitionDuration={2000} delay={200}>
            <div className="img-wrap img-hover-zoom">
              <div>
                <img
                  src={b3_med}
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
              <img src={b9_med} onClick={() => openLightboxOnSlide(2)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={600}>
            <div className="img-wrap img-hover-zoom">
              <div>
                <img
                  src={b1_med}
                  alt=""
                  onClick={() => openLightboxOnSlide(3)}
                />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={800}>
            <div className="img-wrap img-hover-zoom">
              <div>
                <img src={b2_med} onClick={() => openLightboxOnSlide(4)} />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1000}>
            <div className="img-wrap img-hover-zoom">
              <img src={b4_med} onClick={() => openLightboxOnSlide(5)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1200}>
            <div className="img-wrap img-hover-zoom">
              <img src={b5_med} onClick={() => openLightboxOnSlide(6)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1400}>
            <div className="img-wrap img-hover-zoom">
              <img src={b6_med} onClick={() => openLightboxOnSlide(7)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1600}>
            <div className="img-wrap img-hover-zoom">
              <img src={b8_med} onClick={() => openLightboxOnSlide(8)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={1800}>
            <div className="img-wrap img-hover-zoom">
              <img src={b7_med} onClick={() => openLightboxOnSlide(9)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={2000}>
            <div className="img-wrap img-hover-zoom">
              <img src={b10_med} onClick={() => openLightboxOnSlide(10)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={2200}>
            <div className="img-wrap img-hover-zoom">
              <img src={b11_med} onClick={() => openLightboxOnSlide(11)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={2400}>
            <div className="img-wrap img-hover-zoom">
              <img src={b12_med} onClick={() => openLightboxOnSlide(12)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={2600}>
            <div className="img-wrap img-hover-zoom">
              <img src={b13_med} onClick={() => openLightboxOnSlide(13)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={2800}>
            <div className="img-wrap img-hover-zoom">
              <img src={b14_med} onClick={() => openLightboxOnSlide(14)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={3000}>
            <div className="img-wrap img-hover-zoom">
              <img src={b15_med} onClick={() => openLightboxOnSlide(15)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={3000}>
            <div className="img-wrap img-hover-zoom">
              <img src={b16_med} onClick={() => openLightboxOnSlide(17)} />
            </div>
          </FadeIn>
        </div>
        <div className="img-item">
          <FadeIn transitionDuration={2000} delay={3000}>
            <div className="img-wrap img-hover-zoom">
              <img src={b17_med} onClick={() => openLightboxOnSlide(16)} />
            </div>
          </FadeIn>
        </div>
      </div>

      <FsLightbox
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
        toggler={lightboxController.toggler}
        sources={[
          b3,
          b9,
          b1,
          b2,
          b4,
          b5,
          b6,
          b8,
          b7,
          b10,
          b11,
          b12,
          b13,
          b14,
          b15,
          b17,
          b16,
        ]}
        thumbs={[
          b3_thumb,
          b1_thumb,
          b2_thumb,
          b4_thumb,
          b5_thumb,
          b6_thumb,
          b8_thumb,
          b7_thumb,
          b9_thumb,
          b10_thumb,
          b11_thumb,
          b12_thumb,
          b13_thumb,
          b14_thumb,
          b15_thumb,
          b17_thumb,
          b16_thumb,
        ]}
        slide={lightboxController.slide}
      />
    </>
  );
}
export default LightBox;
