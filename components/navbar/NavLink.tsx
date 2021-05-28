import classNames from "classnames";
import React, { ReactElement, useState } from "react";
import { Link } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

interface NavLinkProps {
  text?: string;
  icon?: string;
  children?: ReactElement;
}

const NavLink = ({
  children,
  text,
  icon,
  onSetActive,
  onSetInactive,
  ...props
}: ReactScrollLinkProps & NavLinkProps) => {
  const [active, setActive] = useState(false);
  const handleSetActive = (to: string) => {
    setActive(true);
    onSetActive?.(to);
  };
  const handleSetInactive = () => {
    setActive(false);
    onSetInactive?.();
  };
  return (
    <li
      className={classNames("text-xs text-center cursor-pointer navlink", {
        active: active,
      })}
    >
      <Link
        activeClass="text-red-500"
        spy={true}
        hashSpy={true}
        smooth={true}
        duration={300}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}
        {...props}
      >
        {icon && <p className="material-icons">{icon}</p>}
        <p className="uppercase">{children || text || props?.to}</p>
      </Link>
    </li>
  );
};

export default NavLink;
