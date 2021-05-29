import React from "react";
import GridContainer from "./GridContainer";
import ServiceCard from "./ServiceCard";
const ServicesSection = (): JSX.Element => (
  <section id="services" className="overflow-hidden bg-gray-50">
    <div className="container mx-auto min-h-screen relative z-0 lg:px-20 md:px-10 px-8 md:py-36 py-12">
      <GridContainer />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
        <ServiceCard
          headerIcon="laptop"
          title="Web - Front End"
          skillIcons={[
            "javascript-plain",
            "typescript-plain",
            "angularjs-plain-wordmark",
            "react-plain-wordmark",
            "redux-plain",
            "nextjs-plain-wordmark",
            "handlebars-plain-wordmark",
            "html5-plain-wordmark",
            "css3-plain-wordmark",
            "sass-plain",
            "jquery-plain-wordmark",
          ]}
        />
        <ServiceCard
          headerIcon="construction"
          title="Back End"
          skillIcons={[
            "nodejs-plain-wordmark",
            "express-original-wordmark",
            "nestjs-plain-wordmark",
            "php-plain",
          ]}
        />
        <ServiceCard
          headerIcon="phone_android"
          title="Mobile App"
          skillIcons={[
            "apple-plain",
            "android-plain-wordmark",
            "react-plain-wordmark",
            "swift-plain-wordmark",
          ]}
        />
        <ServiceCard
          headerIcon="storage"
          title="Database"
          gridPosition="md:col-start-2"
          skillIcons={[
            "mongodb-plain-wordmark",
            "mysql-plain-wordmark",
            "postgresql-plain-wordmark",
            "sequelize-plain-wordmark",
            {
              type: "icomoon",
              icon: "knexjs",
            },
          ]}
        />
      </div>
    </div>
  </section>
);

export default ServicesSection;
