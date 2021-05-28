import React from "react";

const LoadingScreen = (): JSX.Element => {
  return (
    <div id="preloader">
      <div className="wrapper">
        <div className="circle bg-red-500"></div>
        <div className="circle bg-red-500"></div>
        <div className="circle bg-red-500"></div>
        <div className="shadow bg-red-900 bg-opacity-80"></div>
        <div className="shadow bg-red-900 bg-opacity-80"></div>
        <div className="shadow bg-red-900 bg-opacity-80"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
