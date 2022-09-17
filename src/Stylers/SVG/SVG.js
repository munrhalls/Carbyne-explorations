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
          L ${width * 0.1980705} ${height * 0.85788}
          L ${width * 0.1980705} ${height}

        `}
          fill="#000019"
          stroke="#000019"
          strokeWidth="1"
        />
      </svg>
    );
  },
  BGCaveDots: function () {
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
          d={`M ${width * 0.15} ${height * 0.7}
          L ${width * 0.15} ${height * 0.7}

          M ${width * 0.15} ${height * 0.7}
          L ${width * 0.15} ${height * 0.701}

          M ${width * 0.15} ${height * 0.71}
          L ${width * 0.15} ${height * 0.712}

          M ${width * 0.16} ${height * 0.72}
          L ${width * 0.161} ${height * 0.72}

          M ${width * 0.14} ${height * 0.723}
          L ${width * 0.141} ${height * 0.723}


          M ${width * 0.145} ${height * 0.69}
          L ${width * 0.145} ${height * 0.691}

          M ${width * 0.145} ${height * 0.691}
          L ${width * 0.145} ${height * 0.69094}

          M ${width * 0.145} ${height * 0.692}
          L ${width * 0.145} ${height * 0.6923}


          M ${width * 0.133} ${height * 0.6923}
          L ${width * 0.132} ${height * 0.6924}

          M ${width * 0.133} ${height * 0.8}
          L ${width * 0.132} ${height * 0.802}

          M ${width * 0.133} ${height * 0.81}
          L ${width * 0.132} ${height * 0.8102}

          M ${width * 0.133} ${height * 0.84}
          L ${width * 0.132} ${height * 0.84102}

          M ${width * 0.123} ${height * 0.81}
          L ${width * 0.121} ${height * 0.8102}

          M ${width * 0.12} ${height * 0.81}
          L ${width * 0.121} ${height * 0.8102}

          M ${width * 0.15} ${height * 0.81}
          L ${width * 0.1501} ${height * 0.8102}

          M ${width * 0.2} ${height * 0.81}
          L ${width * 0.201} ${height * 0.8102}

          M ${width * 0.19} ${height * 0.83}
          L ${width * 0.1901} ${height * 0.8302}

          M ${width * 0.19} ${height * 0.73}
          L ${width * 0.1901} ${height * 0.731}

          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}


          M ${width * 0.175} ${height * 0.71}
          L ${width * 0.17501} ${height * 0.711}
          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}
          M ${width * 0.167} ${height * 0.751}
          L ${width * 0.16701} ${height * 0.7511}
          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}
          M ${width * 0.157} ${height * 0.71}
          L ${width * 0.1571} ${height * 0.711}
          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}
          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}
          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}


          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.171} ${height * 0.711}
          M ${width * 0.17} ${height * 0.751}
          L ${width * 0.1701} ${height * 0.7521}

          M ${width * 0.17} ${height * 0.771}
          L ${width * 0.1701} ${height * 0.7721}

          M ${width * 0.171} ${height * 0.781}
          L ${width * 0.17101} ${height * 0.7821}

          M ${width * 0.1751} ${height * 0.781}
          L ${width * 0.175101} ${height * 0.7821}


          M ${width * 0.1651} ${height * 0.781}
          L ${width * 0.165101} ${height * 0.7821}

          M ${width * 0.1651} ${height * 0.691}
          L ${width * 0.165101} ${height * 0.6921}

          M ${width * 0.1451} ${height * 0.671}
          L ${width * 0.145101} ${height * 0.6721}
          M ${width * 0.1451} ${height * 0.691}
          L ${width * 0.145101} ${height * 0.6921}

          M ${width * 0.17} ${height * 0.71}
          L ${width * 0.1701} ${height * 0.711}

          M ${width * 0.1451} ${height * 0.63} 
          L ${width * 0.145101} ${height * 0.631}

          M ${width * 0.1451} ${height * 0.63} 
          L ${width * 0.145101} ${height * 0.631}

          M ${width * 0.1291} ${height * 0.75} 
          L ${width * 0.12915} ${height * 0.7525}


          M ${width * 0.12745} ${height * 0.75} 
          L ${width * 0.12775} ${height * 0.754}
          
        `}
          fill="#fff"
          stroke="#fff"
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
    `}
          fill="none"
          stroke="blue"
          strokeWidth="10"
        />
      </svg>
    );
  },
  BGcontentContainer: function () {
    return <div className="BGcontentContainer"></div>;
  },
};
