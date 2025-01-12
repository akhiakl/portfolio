import React, { type JSX } from 'react';
import GridContainer from '../services/GridContainer'
import ServiceCard from '../services/ServiceCard'

const ServicesSection = (): JSX.Element => (
  <section id="services" className="overflow-hidden bg-gray-50 relative">
    <h1 className="transform-gpu z-0 md:writing-vertical md:absolute md:top-36 md:left-4 font-extrabold md:text-10xl text-7xl md:text-left text-center md:text-gray-300 text-gray-700 mb-4">
      services.
    </h1>
    <div className="container relative mx-auto min-h-screen z-0 lg:px-20 md:px-10 px-8 md:py-36 py-12">
      <GridContainer />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
        <ServiceCard
          headerIcon="display"
          title="Web - Front End"
          skillIcons={[
            'javascript-plain',
            'typescript-plain',
            'angularjs-plain',
            'react-plain-wordmark',
            'redux-plain',
            'nextjs-plain-wordmark',
            'handlebars-plain-wordmark',
            'html5-plain-wordmark',
            'css3-plain-wordmark',
            'sass-plain',
            'jquery-plain-wordmark',
            'graphql-plain-wordmark'
          ]}
        />
        <ServiceCard
          headerIcon="cogs"
          title="Back End"
          skillIcons={['nodejs-plain-wordmark', 'express-original', 'nestjs-plain', 'php-plain',
            'graphql-plain-wordmark'
          ]}
        />
        <ServiceCard
          headerIcon="mobile"
          title="Mobile App"
          skillIcons={[
            'apple-plain',
            'android-plain-wordmark',
            'react-plain-wordmark',
            'swift-plain',
          ]}
        />
        <ServiceCard
          headerIcon="database"
          title="Database"
          skillIcons={[
            'mongodb-plain-wordmark',
            'mysql-plain',
            'postgresql-plain-wordmark',
            'sequelize-plain'
          ]}
        />
        <ServiceCard
          headerIcon="make-group"
          title="Others"
          skillIcons={[
            'wordpress-plain-wordmark',
            'magento-original-wordmark',
            {
              type: 'icomoon',
              icon: 'strapi',
            },
            {
              type: 'icomoon',
              icon: 'cockpit',
            },
            {
              type: 'icomoon',
              icon: 'contentful',
            },
            {
              type: 'icomoon',
              icon: 'vercel',
            },
            {
              type: 'icomoon',
              icon: 'algolia',
            },
          ]}
        />
      </div>
    </div>
  </section>
)

export default ServicesSection
