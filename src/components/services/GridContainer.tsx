import React, { CSSProperties, type JSX } from 'react';
import { RellaxContainer } from '@/components'
interface BoxRotateOptions {
  translate?: string
  rotate?: string
}
const GridContainer = (): JSX.Element => {
  const boxRotateStyle = (options?: BoxRotateOptions): CSSProperties => {
    const defaultOptions = {
      rotate: 'rotate(45deg)',
      translate: 'translate3d(-50%, 0, 0)',
    }
    const { translate, rotate } = options || defaultOptions
    return {
      transform: `${rotate} ${translate}`,
      transformOrigin: 'left',
    }
  }
  return (
    <>
      <div className="absolute grid grid-cols-6 grid-flow-col -z-1 left-0 right-0 top-0 bottom-0">
        <div className="col-auto relative z-0 border-gray-300/25 md:border-l">
          <RellaxContainer
            options={{
              speed: 1,
              center: true,
            }}
            style={boxRotateStyle()}
            className="z-0 bg-red-500 rounded-md shadow-md absolute bottom-24 transform-gpu -translate-x-1/2 md:h-10 h-8 md:w-10 w-8"
          ></RellaxContainer>
        </div>
        <div className="col-auto relative z-0 border-gray-300/25 md:border-l"></div>
        <div className="col-auto relative z-0 border-gray-300/25 md:border-l">
          <RellaxContainer
            options={{
              speed: -1,
              center: true,
            }}
            style={boxRotateStyle()}
            className="z-0 bg-red-500 rounded-md shadow-md absolute top-4 md:h-10 h-8 md:w-10 w-8"
          ></RellaxContainer>
        </div>
        <div className="col-auto relative z-0 border-gray-300/25 md:border-l">
          <RellaxContainer
            style={boxRotateStyle()}
            options={{
              speed: 1,
              center: true,
            }}
            className="md:block hidden z-0 bg-red-500 rounded-md shadow-lg absolute top-2/4 -right-1/4 h-24 w-24"
          ></RellaxContainer>
        </div>
        <div className="col-auto relative -z-1 border-gray-300/25 md:border-l"></div>
        <div className="col-auto relative -z-1 border-gray-300/25 md:border-l border-r">
          <RellaxContainer
            options={{
              speed: -1,
              center: true,
            }}
            style={{
              transform: `rotate(65deg)`,
              transformOrigin: 'left',
            }}
            className="bg-red-500 rounded-md shadow-xs absolute top-24 left-48 h-96 w-96"
          ></RellaxContainer>
        </div>
      </div>
    </>
  )
}

export default GridContainer
