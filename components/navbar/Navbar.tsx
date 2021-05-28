import classNames from "classnames";
import React, { useState } from "react";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const onButtonClick = () => setShow(!show);
  const primaryColor = ["home", "portfolio"].includes(activeSection)
    ? "black-50"
    : "gray-50";
  const secondaryColor = ["home", "portfolio"].includes(activeSection)
    ? "gray-50"
    : "black-50";
  return (
    <>
      <Hamburger
        primaryColor={primaryColor}
        className={classNames(
          "fixed z-40 left-10 top-10 ring-red-900 ring-opacity-5",
          {
            "ring-4": !show,
          }
        )}
        open={show}
        onClick={onButtonClick}
      />
      <nav
        className={classNames(
          `fixed z-30 left-0 right-0 top-0
           bg-${primaryColor} border-b-2 border-red-500 text-${secondaryColor}
           flex flex-row
           transform-gpu overflow-hidden
           transition-size ease-in-out duration-500`,
          {
            "md:h-32 h-full w-full": show,
            "h-14 w-14 translate-x-10 translate-y-10 rounded-full": !show,
          }
        )}
      >
        <Nav
          className={classNames("transition-opacity duration-500  px-10", {
            "opacity-0": !show,
            "opacity-100 delay-500": show,
          })}
        >
          <Nav.Link
            onSetActive={setActiveSection}
            to="home"
            hashSpy={false}
            text="Home"
            icon="home"
          />
          <Nav.Link
            onSetActive={setActiveSection}
            to="about"
            offset={-126}
            text="About"
            icon="info"
          />
          <Nav.Link
            onSetActive={setActiveSection}
            to="services"
            text="Services"
            icon="whatshot"
          />
          <Nav.Link
            onSetActive={setActiveSection}
            to="portfolio"
            text="Portfolio"
            icon="grid_view"
          />
          <Nav.Link
            onSetActive={setActiveSection}
            to="about2"
            text="About"
            icon="format_quote"
          />
          <Nav.Link
            onSetActive={setActiveSection}
            to="about3"
            text="About"
            icon="format_quote"
          />
        </Nav>
      </nav>
      <button
        className="fixed z-40 hover:bg-red-400 focus:outline-none bottom-12 right-12 rounded-full shadow-lg bg-red-500 h-14 w-14 text-gray-50 flex justify-center items-center"
        onClick={() => scroll.scrollToTop()}
      >
        <span className="material-icons text-3xl">arrow_upward</span>
      </button>
    </>
  );
}

export default Navbar;
