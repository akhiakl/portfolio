import React, { CSSProperties } from "react";
interface BoxRotateOptions {
  translate?: string;
  rotate?: string;
}
const GridContainer = () => {
  const boxRotateStyle = (options?: BoxRotateOptions): CSSProperties => {
    const defaultOptions = {
      rotate: "rotate(45deg)",
      translate: "translate3d(-50%, 0, 0)",
    };
    const { translate, rotate } = options || defaultOptions;
    return {
      transform: `${rotate} ${translate}`,
      transformOrigin: "left",
    };
  };
  return (
    <>
      <h1 className="transform-gpu -z-1 md:rotate-90 md:absolute md:top-16 md:-right-1/4 md:origin-top-left font-extrabold md:text-9xl text-6xl md:text-left text-center md:text-gray-200 text-gray-700 mb-4">
        SERVICES.
      </h1>
      <div className="absolute grid grid-cols-6 grid-flow-col -z-1 left-0 right-0 top-0 bottom-0">
        <div className="col-auto relative z-0 border-gray-400 md:border-l border-opacity-10">
          <div
            style={boxRotateStyle()}
            className="box z-0 bg-red-500 rounded-md shadow-md absolute bottom-1 transform-gpu -translate-x-1/2 md:h-10 h-8 md:w-10 w-8"
          ></div>
        </div>
        <div className="col-auto relative z-0 border-gray-400 md:border-l border-opacity-10"></div>
        <div className="col-auto relative z-0 border-gray-400 md:border-l border-opacity-10">
          <div
            style={boxRotateStyle()}
            className="box z-0 bg-red-500 rounded-md shadow-md absolute top-4 md:h-10 h-8 md:w-10 w-8"
          ></div>
        </div>
        <div className="col-auto relative -z-1 border-gray-400 md:border-l border-opacity-10">
          <div
            style={boxRotateStyle()}
            data-rellax-speed="4"
            className="box md:block hidden z-0 bg-red-500 rounded-md shadow-lg absolute top-2/4 -right-1/4 h-24 w-24"
          ></div>
        </div>
        <div className="col-auto relative -z-1 border-gray-400 md:border-l border-opacity-10"></div>
        <div className="col-auto relative z-0 border-gray-400 md:border-l border-opacity-10 border-r">
          <div
            style={{
              transform: `rotate(65deg)`,
              transformOrigin: "left",
            }}
            data-rellax-speed="-1"
            className="box bg-red-500 rounded-md shadow-sm absolute top-24 left-48 h-96 w-96"
          ></div>
        </div>
      </div>
    </>
  );
};

export default GridContainer;
