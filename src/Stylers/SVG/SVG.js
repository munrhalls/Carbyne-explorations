import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import useWindowWidth from "../../Hooks/useWindowWidth";

export const SVG = {
  BGblanket: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M 0 0
      M 0, ${height}
      L 0, 0
      L ${width}, 0
      L ${width}, ${height / 6.5}
    Q ${width * 0.75}, ${height / 10} ${width * 0.6}, ${height / 8.6}
    Q ${width * 0.5}, ${height / 7.5} ${width * 0.325}, ${height / 9}
    Q ${width * 0.1}, ${height / 4.5} ${width * 0.15}, ${height / 2.25}
    L ${width * 0.15}, ${height / 2.25}
    L ${width * 0.1}, ${height / 1.25}
    L ${width * 0.07}, ${height / 0.5}
    `}
          fill="#000"
          stroke="#000"
          strokeWidth="5"
        />
      </svg>
    );
  },
  BGCaveLine: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M 0, 0
          Q${width * 0.09} ${height * 0.45} ${width * 0.245} ${height * 0.75}
          L${width * 0.245} ${height * 0.8}
          L${width * 0.23715} ${height * 0.85}
          L${width * 0.237175} ${height * 0.975}
          L${width * 0.2375} ${height}

        
        `}
          fill="none"
          stroke="#000"
          strokeWidth={`${width / 12.5}`}
        />
      </svg>
    );
  },
  BGCaveLineFill: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M ${width * 0.0975} ${height}
          L ${width * 0.102} ${height * 0.8}
          L ${width * 0.12975} ${height * 0.596}
          L ${width * 0.2} ${height * 0.74788}
          L ${width * 0.20715} ${height * 0.76788}
          L ${width * 0.20705} ${height * 0.79788}





        
        `}
          fill="darkblue"
          stroke="darkblue"
          strokeWidth="1"
        />
      </svg>
    );
  },
  BGblanketOutline: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M 0 0
      M 0, ${height}
      L 0, 0
      L ${width}, 0
      Q ${width}, ${height / 8} ${width}, ${height / 6.5}
      
    Q ${width * 0.6}, ${height / 8.5} ${width * 0.6}, ${height / 7}

    Q ${width * 0.3}, ${height / 4} ${width * 0.3}, ${height / 4.5}
    Q ${width * 0.25}, ${height / 3.25} ${width * 0.25}, ${height / 3.5}
    Q ${width * 0.18}, ${height / 2.5} ${width * 0.15}, ${height / 2.25}
    Q ${width * 0.08}, ${height / 1.05} ${width * 0.1}, ${height / 1.25}
    Q ${width * 0.14}, ${height / 0.25} ${width * 0.07}, ${height / 0.5}
    `}
          fill="none"
          // stroke="blue"
          strokeWidth="10"
        />
      </svg>
    );
  },
  BGcontentContainer: function () {
    return <div className="BGcontentContainer"></div>;
  },
};
