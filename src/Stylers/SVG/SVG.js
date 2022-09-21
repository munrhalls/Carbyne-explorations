import IMG__STARS from "./../../Assets/stars.png";
import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import useWindowWidth from "../../Hooks/useWindowWidth";
// ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

export const SVG = {
  BGblanket: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGblanket SVG"
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
    L ${width * 0.35}, ${height / 0.5}
    `}
          fill="#000"
          stroke="#000"
          strokeOpacity="0.8275"
          strokeLinejoin="round"
          strokeWidth="8"
        />
      </svg>
    );
  },
  BGCaveLine: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGCaveLine SVG"
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
          strokeLinejoin="round"
          strokeWidth={`${width / 12.5}`}
        />
      </svg>
    );
  },
  BGCaveLineFill: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGCaveLineFill SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M ${width * 0.025} ${height}
          L ${width * 0.04} ${height * 0.95}
          L ${width * 0.045} ${height * 0.9}

          L ${width * 0.06} ${height * 0.8725}
          L ${width * 0.065} ${height * 0.87}
          L ${width * 0.07} ${height * 0.8775}
          L ${width * 0.075} ${height * 0.875}
          L ${width * 0.08} ${height * 0.87}
          L ${width * 0.085} ${height * 0.875}
          L ${width * 0.095} ${height * 0.88}

          L ${width * 0.1} ${height * 0.9}
          L ${width * 0.115} ${height * 0.95}
          L ${width * 0.115} ${height * 0.975}
          L ${width * 0.1225} ${height}
        `}
          fill="#000036"
          stroke="#000036"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    );
  },
  BGCircle: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGCircle SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx={`${width * 0.31}`}
          cy={`${height * 0.135}`}
          r={`${height * 0.075}`}
          stroke="black"
          strokeOpacity="0.875"
          strokeWidth="7.5"
          fill="#fff"
        />
      </svg>
    );
  },
  BGCaveSteps: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGCaveSteps SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          className="BGCaveSteps__rectangle"
          x={`${width * 0.05}`}
          y={`${height * 0.98}`}
          width={`${width * 0.05}`}
          height={`${width * 0.0125}`}
          fill="#fff"
        />
        <rect
          className="BGCaveSteps__rectangle"
          x={`${width * 0.05875}`}
          y={`${height * 0.9625}`}
          width={`${width * 0.035}`}
          height={`${width * 0.0085}`}
          fill="#fff"
        />
        <rect
          className="BGCaveSteps__rectangle"
          x={`${width * 0.0675}`}
          y={`${height * 0.947975}`}
          width={`${width * 0.0175}`}
          height={`${width * 0.006}`}
          fill="#fff"
        />
        <rect
          className="BGCaveSteps__rectangle"
          x={`${width * 0.0715}`}
          y={`${height * 0.9375}`}
          width={`${width * 0.01}`}
          height={`${width * 0.003}`}
          fill="#fff"
        />
      </svg>
    );
  },
  BGCaveDots: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGCaveDots SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <circle
          cx={`${width * 0.075}`}
          cy={`${height * 0.91}`}
          r="3"
          stroke="transparent"
          strokeWidth={width * 0.01}
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0725}`}
          cy={`${height * 0.92}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.07125}`}
          cy={`${height * 0.9}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.06125}`}
          cy={`${height * 0.89}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0575}`}
          cy={`${height * 0.88}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0775}`}
          cy={`${height * 0.89}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0755}`}
          cy={`${height * 0.91}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0815}`}
          cy={`${height * 0.9}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0915}`}
          cy={`${height * 0.93}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0615}`}
          cy={`${height * 0.93}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0515}`}
          cy={`${height * 0.895}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.06815}`}
          cy={`${height * 0.875}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0715}`}
          cy={`${height * 0.8985}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0915}`}
          cy={`${height * 0.8985}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.0945}`}
          cy={`${height * 0.905}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.094755}`}
          cy={`${height * 0.915}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.05510194755}`}
          cy={`${height * 0.905}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
        <circle
          cx={`${width * 0.052510194755}`}
          cy={`${height * 0.9155}`}
          r="1"
          stroke="transparent"
          strokeWidth="1"
          fill="#fff"
        />
      </svg>
    );
  },
  BGanimStarDots: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="SVG"
        height={height}
        width={width}
      >
        <svg
          x={width * 0}
          y={height * 0.6}
          width={width * 0.21}
          height={height * 0.4}
        >
          <rect width={width * 2} height={height * 0.4} fill="url(#IMG__STARS)">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              from="0"
              to={-width * 0.3}
              dur="60s"
              repeatCount="indefinite"
            />
          </rect>

          <pattern id="IMG__STARS" width="100%" height="100%">
            <image className="BGanimStarDots__path" href={IMG__STARS} x="0" />
            <image
              className="BGanimStarDots__path"
              href={IMG__STARS}
              x={width * 0.1}
            />
            <image
              className="BGanimStarDots__path"
              href={IMG__STARS}
              x={width * 0.2}
            />
            <image
              className="BGanimStarDots__path"
              href={IMG__STARS}
              x={width * 0.3}
            />
            <image
              className="BGanimStarDots__path"
              href={IMG__STARS}
              x={width * 0.4}
            />
          </pattern>
        </svg>
      </svg>

      // <svg
      //   className="BGanimStarDots SVG"
      //   version="1.1"
      //   height={height}
      //   width={width}
      //   xmlns="http://www.w3.org/2000/svg"
      //   xmlnsXlink="http://www.w3.org/1999/xlink"
      //   style={{ overflow: `visible` }}
      // >
      //   <path
      //     fill="url(#IMG__STARS)"
      //     d={`
      //       M ${0} ${height * 1}

      //       L ${width * 0.15} ${height * 0.7}
      //       L ${width * 0.25} ${height * 0.7}
      //       L ${width * 0.25} ${height * 1}
      //       L ${width * 0.15} ${height * 1}

      //       `}
      //   />
      //   <pattern id="IMG__STARS" width="100%" height="100%">
      //     <image className="BGanimStarDots__path" href={IMG__STARS} />
      //   </pattern>
      // </svg>
    );
  },
  BGTitleLayerLine: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGTitleLayerLine SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M ${width * 0.35} ${height * 0.22} 
          Q${width * 0.6} ${height * 0.24}  ${width * 0.6} ${height * 0.23} 
          Q${width * 0.6} ${height * 0.185}  ${width} ${
            height * 0.15447154471544716
          } 
          `}
          stroke="#333"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* <path
          d={`M ${width * 0.6005917159763313} ${height * 0.20758620689655173} 
          L ${width * 0.9940828402366864} ${height * 0.2113793103448276}
          

          `}
          stroke="#000"
          strokeWidth="2"
          strokeLinejoin="round"
        /> */}
      </svg>
    );
  },
  AppTitle: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="AppTitle SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          id="curve1"
          //   d={`M${width * 0.475} ${height * 0.685}
          //    ${width} ${height * 0.15}
          // `}
          d={`M${width * 0.4943253467843632} ${height * 0.2247371273712737} 
          L ${width * 0.6355611601513241} ${height * 0.21441192411924118} 
          `}
          fill="transparent"
        />

        <text
          className="AppTitle__textOne"
          width="500"
          // x={width * 0.475}
          // y={height * 0.185}
          fill="#000"
        >
          <textPath alignmentBaseline="bottom" xlinkHref="#curve1" fill="#aaa">
            carbyne
          </textPath>
        </text>

        <path
          id="curve2"
          //   d={`M${width * 0.475} ${height * 0.685}
          //    ${width} ${height * 0.15}
          // `}
          d={`M${width * 0.4005422446406053} ${height * 0.1942818428184282} 
          L ${width * 0.8612862547288777} ${height * 0.15821138211382114} 
          `}
          fill="transparent"
        />

        <text className="AppTitle__textTwo">
          <textPath alignmentBaseline="top" xlinkHref="#curve2" fill="#414141">
            Explorations
          </textPath>
        </text>
      </svg>
    );
  },
  BGblanketOutline: function () {
    // ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)

    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGblanketOutline SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M 0 0
    `}
          fill="none"
          stroke="blue"
          strokeLinejoin="round"
          strokeWidth="10"
        />
      </svg>
    );
  },
  BGcontentContainer: function () {
    return <div className="BGcontentContainer"></div>;
  },
};
