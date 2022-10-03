// ALL SVG'S BY MUNRHALLS (ME, AUTHOR OF THIS BLOG)
import IMG__STARS from "./../../Assets/stars.png";
import React from "react";
import useWindowHeight from "../../Hooks/useWindowHeight";
import useWindowWidth from "../../Hooks/useWindowWidth";
import { useGlobContext } from "../../Contexts/SphereProvider";
import { v4 as uuidV4 } from "uuid";
import { Content } from "./../Content/Content";

export const SVG = {
  BGblanket: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;
    const { globColor } = useGlobContext();

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
          stroke={`${globColor ? globColor : "#000"}`}
          strokeOpacity="0.8275"
          strokeLinejoin="round"
          strokeWidth="8"
        />
      </svg>
    );
  },
  BGCaveLine: function () {
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
  BGClepsidreBridgeway: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGClepsidreBridgeway SVG"
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
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={`${width / 12.5}`}
        />

        <path
          d={`M${width * 0.0504} ${height * 0.0}  
          L${width * 0.0608} ${height * 0}
          L${width * 0.0808} ${height * 0}
          L${width * 0.14593140794223827} ${height * 0.27186206896551724}

          L${width * 0.0850379951495554} ${height * 0.5569620253164557}
          L${width * 0.0804} ${height * 0.615}
          
          L${width * 0.01476394502829426} ${height * 0.3848101265822785}
          L${width * 0.04993252361673414} ${height * 0.06689655172413793}
          

    
        `}
          fill="#000"
          fillOpacity="0.85"
        />

        <path
          d={`M${width * 0.0504} ${height * 0.0}
          L${width * 0.01476394502829426} ${height * 0.3848101265822785}
          L${width * 0.14593140794223827} ${height * 0.27186206896551724} 
          L${width * 0.0850379951495554} ${height * 0.5569620253164557}

          L${width * 0.0804} ${height * 0.615}
        `}
          fill="#000"
          fillOpacity="0.95"
        />
      </svg>
    );
  },
  BGCaveLineFill: function () {
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
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;
    const { globColor, setGlobColor, setContent } = useGlobContext();

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
          fillOpacity={`${globColor ? 0.5 : 1}`}
          fill={`${globColor ? globColor : "#fff"}`}
          onClick={() => {
            console.log("???");
            setGlobColor("");
            setContent(null);
          }}
        />
      </svg>
    );
  },
  LightningAnim: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;
    const { globColor } = useGlobContext();

    return (
      <svg
        className="LightningAnim SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {/* <path
          fill="none"
          stroke="lightgrey"
          d="M 40,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
        /> */}

        {/* <circle r="1" fill="blue">
          <animateMotion
            dur="1s"
            repeatCount="1"
            path={`M 0 ${height} 
            L ${width * 0.11925465838509317} ${height * 0.7005420054200542} 
            L ${width * 0.12173913043478261} ${height * 0.5284552845528455} 
            L ${width * 0.2608695652173913} ${height * 0.43089430894308944} 
            L ${width * 0.22111801242236026} ${height * 0.23983739837398374} 
            L ${width * 0.3105590062111801} ${height * 0.2032520325203252} 
            `}
          />
        </circle> */}
      </svg>
    );
  },
  BGCaveSteps: function () {
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
              dur="15s"
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
  BGNavigationalAntennae: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;
    const { globColor } = useGlobContext();

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
          d={`M${width * 0.08594815825375171} ${height * 0.8509485094850948}
          L ${width * 0.0791268758526603} ${height * 0.7994579945799458}
          
          L ${width * 0.2155525238744884} ${height * 0.23718157181571815}
        `}
          stroke={`${globColor ? globColor : "#fff"}`}
          strokeWidth="1"
        />
      </svg>
    );
  },
  BGUpholderConnectorXer: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGUpholderConnectorXer SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M${width * 0.06275579809004093} ${height * 0.7913279132791328}
          
          L ${width * 0.19283765347885403} ${height * 0.18585365853658534}
          Q ${width * 0.2333151432469304} ${height * 0.32848238482384823} ${
            width * 0.40109140518417463
          } ${height * 0.251111111111111}
          
        `}
          stroke="#777"
          strokeWidth="1"
        />
      </svg>
    );
  },
  BGNavigationalRiver: function ({ children }) {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    return (
      <svg
        className="BGNavigationalRiver SVG"
        version="1.1"
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d={`M${width * 0.0858433734939759} ${height * 0.5524590163934426}
            L ${width * 0.1460843373493976} ${height * 0.27049180327868855}
           
            Q ${width * 0.214639175257732} ${height * 0.141087420042643924} ${
            width * 0.21234939759036145
          } ${height * 0.15901639344262294}
            Q ${width * 0.2102409638554217} ${height * 0.04065573770491806} ${
            width * 0.3102409638554217
          } ${height * 0.05065573770491806}
  
            L ${width * 0.4126506024096386} ${height * 0.10163934426229508}
            L ${width * 0.7469879518072289} ${height * 0.10655737704918032}
            L ${width * 0.9939759036144579} ${height * 0.14590163934426228}
            L ${width * 0.9909638554216867} ${height * 0.001278688524590164}
            L ${width * 0.05036144578313253} ${height * 0.00394426229508197}
            L ${width * 0.01355421686746988} ${height * 0.39672131147540984}
            L ${width * 0.006024096385542169} ${height * 0.978688524590164}
            L ${width * 0.061746987951807226} ${height * 0.7950819672131147}
            Z
        `}
          stroke="#777"
          strokeOpacity="0.25"
          strokeWidth="1"
          fill="transparent"
        />

        <path
          d={`M${width} ${height * 0.14447154471544716}
          L ${width * 0.9890859481582538} ${height * 0.15176151761517614}
          Q ${width * 0.77207366984993179} ${height * 0.082113821138211}
          ${width * 0.6207366984993179} ${height * 0.052113821138211}
          L ${width * 0.39154160982264663} ${height * 0.03517615176151762}

          L ${width * 0.296043656207367} ${height * 0.04533062330623306}
          L ${width * 0.19781718963165076} ${height * 0.04502168021680217}
          Q ${width * 0.1206139154160982} ${height * 0.04959349593495936}
          ${width * 0.1406139154160982} ${height * 0.064959349593495936}

          Q ${width * 0.05594815825375171} ${height * 0.25799457994579946}
          ${width * 0.04594815825375171} ${height * 0.5799457994579946}
          L ${width * 0.03957708049113233} ${height * 0.7967479674796748}
          L ${width * 0.014106412005457026} ${height * 0.9227642276422764}
        `}
          stroke="transparent"
          fill="none"
          strokeLinejoin="round"
        />

        {children}
      </svg>
    );
  },
  BGNavigationalRiverButton: function ({ color, text, timeDistance }) {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;
    const { content, setContent, setGlobColor } = useGlobContext();
    const contentLink = text?.toUpperCase().trim();
    const offset = `${10 * timeDistance + Math.ceil(text.length) / 3}`;
    const tspans = text?.split(" ");

    return (
      <svg
        className="BGNavigationalRiverButton"
        version="1.1"
        // height={height}
        // width={width}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <text
          className="BGNavigationalRiverButton__text"
          style={{
            filter: `drop-shadow(-0 0 4px ${color})`,
            textShadow: `1px 3px 7px ${color}`,
            fontSize: `${
              text?.toUpperCase()?.trim() === content ? "1.75rem" : ".75rem"
            }`,
          }}
          fill="#fff"
          textLength="2.5rem"
          lengthAdjust="spacingAndGlyphs"
          dx="0"
          dy="-10"
          onClick={() => {
            setContent(contentLink);
            setGlobColor(`${color}`);
          }}
        >
          {/* <textPath alignmentBaseline="top" xlinkHref="#curve2" fill="##fff"> */}
          {tspans.map((textPart, index) => {
            return (
              <tspan
                key={uuidV4()}
                dy={`${index * 10}`}
                x="-5"
                className="BGNavigationalRiverButton__text__tspan"
              >
                {textPart}
              </tspan>
            );
          })}

          {/* </textPath> */}
          <animateMotion
            dur="360s"
            begin={-offset * 3}
            repeatCount="indefinite"
            path={`M${width} ${height * 0.14447154471544716}
          L ${width * 0.9890859481582538} ${height * 0.15176151761517614}
          Q ${width * 0.77207366984993179} ${height * 0.082113821138211}
          ${width * 0.6207366984993179} ${height * 0.052113821138211}
          L ${width * 0.39154160982264663} ${height * 0.03517615176151762}

          L ${width * 0.296043656207367} ${height * 0.04533062330623306}
          L ${width * 0.19781718963165076} ${height * 0.04502168021680217}
          Q ${width * 0.1206139154160982} ${height * 0.04959349593495936}
          ${width * 0.1406139154160982} ${height * 0.064959349593495936}

          Q ${width * 0.05594815825375171} ${height * 0.25799457994579946}
          ${width * 0.04594815825375171} ${height * 0.5799457994579946}
          L ${width * 0.03957708049113233} ${height * 0.7967479674796748}
          L ${width * 0.014106412005457026} ${height * 0.9227642276422764}
        `}
          />
        </text>
      </svg>
    );
  },
  BGNavigationalRiverButtons: function () {
    const height = `${useWindowHeight()}`;
    const width = `${useWindowWidth()}`;

    const BGNavigationalRiverButtons = [
      "Effectiveness recipes",
      "Music",
      "Practical meditation",

      "Book choices",
      "SleepWaterFood ExercisingResting",
      "Learning skills",

      "Workflow skills",
      "My programming works",
      "My poems",
    ];
    const colors = [
      "#2e38ff",
      "gold",

      "orchid",
      "brown",
      "darkkhaki",

      "teal",
      "green",
      "lightblue",
      "darkblue",
    ];

    // {BGNavigationalRiverButtons.map((navBtn) => {
    //   const navBtnCaps = navBtn?.toUpperCase().trim();

    //   return (
    //     <React.Fragment key={uuidV4()}>
    //       {navBtnCaps === content &&
    //         contentComps[
    //           BGNavigationalRiverButtons.map((el) =>
    //             el.toUpperCase().trim()
    //           ).indexOf(content)
    //         ]}
    //     </React.Fragment>
    //   );
    // })}

    return (
      <>
        {BGNavigationalRiverButtons.map((el, index) => {
          let timeDistance = index;
          if (index === 0) {
            timeDistance = 0;
          }

          return (
            <SVG.BGNavigationalRiverButton
              key={uuidV4()}
              text={el}
              color={colors[index] || 0}
              timeDistance={timeDistance}
            />
          );
        })}
      </>
    );
  },
  BGblanketOutline: function () {
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
  CollectedShapesNavbar: function () {
    const { content } = useGlobContext();

    return (
      <>
        <SVG.BGanimStarDots />
        <SVG.BGblanket />
        <SVG.BGCaveLine />

        <SVG.BGClepsidreBridgeway />
        <SVG.BGCaveLineFill />
        <SVG.BGCaveSteps />

        <SVG.BGCaveDots />
        <SVG.BGTitleLayerLine />
        <SVG.BGblanketOutline />

        <SVG.BGcontentContainer />
        <SVG.AppTitle />
        <SVG.BGUpholderConnectorXer />

        <SVG.BGNavigationalAntennae />

        <SVG.BGNavigationalRiver>
          <SVG.BGCircle />
          <SVG.BGNavigationalRiverButtons />
        </SVG.BGNavigationalRiver>

        {!content && <Content.Welcome />}
      </>
    );
  },
};
