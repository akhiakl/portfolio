/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from "react";
import Rellax, { RellaxOptions } from "rellax";

interface ContainerProps {
  options: RellaxOptions;
}

const RellaxContainer = ({
  options,
  children,
  ...props
}: ContainerProps & React.AllHTMLAttributes<HTMLElement>): JSX.Element => {
  const ref = useRef(null);
  useEffect(() => {
    const rellax = new Rellax(ref?.current || ".about-rellax", options);
    return () => {
      rellax.destroy();
    };
  }, [options]);
  return <div {...props}>{children}</div>;
};

export default RellaxContainer;
