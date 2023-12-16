import React from "react";
import "css-doodle";
import "./Header.css";

const DoodleComponent = () => {
  return (
    <div>
      <css-doodle>
        {`
          @grid: 7 / 100vmax / #073642;
          
          @shape: star 5;
          @size: 5vmin; /* Adjust the size to make stars smaller */
          background: hsla(210, 0%, 100%, @r.8);
          transform: rotate(@r(360deg)) scale(@r(.2, 1.5)) translate(@m2.@r(±50%));
          animation: blink-animation 2.5s infinite alternate;
          animation-delay: @r(0s, 4s);

          @keyframes blink-animation {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.2;
            }
          }
        `}
      </css-doodle>
    </div>
  );
};

export default DoodleComponent;
