import React, { useEffect } from "react";
import Rellax from "rellax";
import GridContainer from "./GridContainer";
import ServiceCard from "./ServiceCard";
const ServicesSection = () => {
  useEffect(() => {
    const rellax = new Rellax(".box", {
      speed: -2,
      center: true,
    });
    return () => {
      rellax.destroy();
    };
  }, []);
  return (
    <section id="services" className="overflow-hidden bg-gray-50">
      <div className="container mx-auto min-h-screen relative z-0 lg:px-20 md:px-10 px-8 md:py-32 py-12">
        <GridContainer />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
          <ServiceCard
            headerIcon="laptop"
            title="Front End"
            description="Lead
          TypeScript/JavaScript development: bootstraping, refactoring,
          improving the structure, reliability, build setup"
            skillIcons={[
              "angularjs-plain-wordmark",
              "react-plain-wordmark",
              "nextjs-plain-wordmark",
              "handlebars-plain-wordmark",
              "html5-plain-wordmark",
              "css3-plain-wordmark",
              "sass-plain",
              "react-plain-wordmark",
            ]}
          />
          <ServiceCard
            headerIcon="laptop"
            title="Front End"
            description="Lead
          TypeScript/JavaScript development: bootstraping, refactoring,
          improving the structure, reliability, build setup"
            skillIcons={[
              "angularjs-plain-wordmark",
              "react-plain-wordmark",
              "nextjs-plain-wordmark",
              "handlebars-plain-wordmark",
              "html5-plain-wordmark",
              "css3-plain-wordmark",
              "sass-plain",
              "react-plain-wordmark",
            ]}
          />
          <ServiceCard
            headerIcon="laptop"
            title="Front End"
            description="Lead
          TypeScript/JavaScript development: bootstraping, refactoring,
          improving the structure, reliability, build setup"
            skillIcons={[
              "angularjs-plain-wordmark",
              "react-plain-wordmark",
              "nextjs-plain-wordmark",
              "handlebars-plain-wordmark",
              "html5-plain-wordmark",
              "css3-plain-wordmark",
              "sass-plain",
              "react-plain-wordmark",
            ]}
          />
          <ServiceCard
            headerIcon="laptop"
            title="Front End"
            description="Lead
          TypeScript/JavaScript development: bootstraping, refactoring,
          improving the structure, reliability, build setup"
            skillIcons={[
              "angularjs-plain-wordmark",
              "react-plain-wordmark",
              "nextjs-plain-wordmark",
              "handlebars-plain-wordmark",
              "html5-plain-wordmark",
              "css3-plain-wordmark",
              "sass-plain",
              "react-plain-wordmark",
            ]}
          />
          <ServiceCard
            headerIcon="laptop"
            title="Front End"
            description="Lead
          TypeScript/JavaScript development: bootstraping, refactoring,
          improving the structure, reliability, build setup"
            skillIcons={[
              "angularjs-plain-wordmark",
              "react-plain-wordmark",
              "nextjs-plain-wordmark",
              "handlebars-plain-wordmark",
              "html5-plain-wordmark",
              "css3-plain-wordmark",
              "sass-plain",
              "react-plain-wordmark",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
