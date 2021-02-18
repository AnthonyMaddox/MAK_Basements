import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import blue_shark from "../Images/blue_shark.JPG";
import "../App.css";

function LightBox() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[blue_shark, blue_shark]}
        initialAnimation="scale-in-long"
        slideChangeAnimation="scale-in"
      />
    </>
  );
}
export default LightBox;
