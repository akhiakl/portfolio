import React from "react";

const PortflioSection = (): JSX.Element => (
  <section id="portfolio" className="bg-black-50-dotted">
    <div className="flex-flex-column gap-10 w-full min-h-screen p-10">
      <h1 className="md:text-10xl text-8xl font-extrabold tracking-tighter text-gray-700 opacity-70 shadow-lg">
        portfolio.
      </h1>
      <div className="flex h-1/2 flex-row w-full">
        <div className="h-full w-1/2 relative">
          <div className="absolute top-0 right-0 bg-red-500 h-24 w-12" />
        </div>
        <div className="h-full w-1/">
          <div className="absolute top-0 right-0 bg-red-500 h-24 w-12" />
        </div>
      </div>
      <div className="flex h-1/2 flex-row w-full">
        <div className="h-full w-1/" />
        <div className="h-full w-1/2" />
      </div>
    </div>
  </section>
);

export default PortflioSection;
