import React, { useEffect, useRef } from "react";
import Rellax from "rellax";
import AnimatedButton from "../AnimatedButton";

const About = (): JSX.Element => {
  const aboutRef = useRef(null);
  const hireRef = useRef(null);

  useEffect(() => {
    const aboutRellax = new Rellax(aboutRef?.current || ".about-rellax", {
      speed: -0.225,
      center: true,
    });
    const hireRellax = new Rellax(hireRef?.current || ".hire-rellax", {
      speed: -0.225,
    });
    return () => {
      aboutRellax.destroy();
      hireRellax.destroy();
    };
  }, []);
  return (
    <section id="about">
      <div className="about-me bg-red-500 px-12 py-24 text-gray-50">
        <div className="container mx-auto flex flex-col items-center relative z-0 pt-6 lg:px-48 md:px-20 px-0">
          <h1
            ref={aboutRef}
            className="md:text-9xl text-8xl font-extrabold text-red-900 opacity-20 absolute left-50 -top-2 leading-none -z-1"
          >
            about
          </h1>
          <h3
            data-aos="fade-in"
            className="text-3xl tracking-widest font-extrabold mb-4"
          >
            Hi I&lsquo;m <span className="text-yellow-300">Akhil K</span>
          </h3>
          <p
            data-aos="fade-in"
            data-aos-duration="1500"
            className="text-white md:text-base text-sm text-justify mb-6"
          >
            I am a{" "}
            <span className="text-yellow-300 underline font-bold text-lg">
              Full stack Javascript developer
            </span>{" "}
            enough of an artist to draw freely upon my imagination. The point is
            that when I see a sunset or a waterfall or something, for a split
            second it&lsquo;s so great, because for a little bit I&lsquo;m out
            of my brain, and it&lsquo;s got nothing to do with me. I&lsquo;m not
            trying to figure it out, you know what I mean? And I wonder if I can
            somehow find a way to maintain that mind stillness.
          </p>
          <form
            ref={hireRef}
            className="hire-rellax"
            method="get"
            target="_blank"
            action="resume.pdf"
          >
            <AnimatedButton
              data-aos="fade-up"
              type="submit"
              className="w-100 flex"
              primaryColor="red-500"
              secondaryColor="gray-50"
            >
              Checkout my resume{"  "}
              <span className="material-icons-outlined text-base leading-none">
                file_download
              </span>
            </AnimatedButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
