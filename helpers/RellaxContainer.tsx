/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import Rellax, { RellaxOptions } from 'rellax';

interface ContainerProps {
  options: RellaxOptions;
}

const RellaxContainer = ({
  options,
  children,
  ...props
}:ContainerProps & React.AllHTMLAttributes<HTMLElement>) => {
  const ref = useRef(null);
  useEffect(() => {
    const rellax = new Rellax(ref?.current || '.about-rellax', {
      speed: -0.225,
      center: true,
    });
    return () => {
      rellax.destroy();
    };
  }, []);
  return <div {...props}>{children}</div>;
};

export default RellaxContainer;
