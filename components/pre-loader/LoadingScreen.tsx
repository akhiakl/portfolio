import React from 'react'

const loaderItems = Array.from({ length: 3 }, (_, i) => i + 1)

const LoadingScreen = () => {
  return (
    <div id="preloader" className="fixed h-screen w-full bg-black-50 z-50">
      <div className="w-20 h-10 absolute left-1/2 top-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 wrapper">
        {loaderItems.map((item) => (<div key={`preloader-${item}-circle`} className="w-3 h-3 rounded-full absolute circle bg-red-500"></div>))}
        {loaderItems.map((item) => (<div key={`preloader-${item}-shadow`} className="w-3 h-1 rounded-full absolute bg-black bg-opacity-50 shadow bg-red-900 bg-opacity-80"></div>))}
      </div>
    </div>
  )
}

export default LoadingScreen
