import React from "react";

const WavyBottom = ({ color = "var(--appBackground)", style }) => {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill={color}
        fillOpacity="1"
        d="M0,256L80,229.3C160,203,320,149,480,154.7C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      ></path>
    </svg>
  );
};

export default WavyBottom;
