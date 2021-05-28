import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import HomeSection from "../components/sections/Home";
import AboutSection from "../components/sections/About";
import ServicesSection from "../components/sections/services/Services";

export default function Home() {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")?.[0];
    const preloaderElement = document.getElementById("preloader");
    setTimeout(() => {
      bodyElement?.classList.remove("overflow-hidden");
      preloaderElement?.remove();
    }, 2000);
  }, []);
  return (
    <div className="font-karla subpixel-antialiased">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </div>
  );
}
