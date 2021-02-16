import React from "react";

const MyMapComponent = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.960703188283!2d-76.9949415846542!3d38.74166397959496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7a99024936455%3A0x28a861d45ec9a59c!2sM.A.K.%20Remodeling%20Services!5e0!3m2!1sen!2sus!4v1613501182866!5m2!1sen!2sus"
        width="200"
        height="150px"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};
export default MyMapComponent;
