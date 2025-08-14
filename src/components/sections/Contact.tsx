import React, { type JSX } from 'react';
import { RellaxContainer } from '@/components'
import IconSet from '../IconSet'

const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="bg-black-50 min-h-screen pt-16 flex flex-col justify-end">
      <div className="bg-gray-50 container mx-auto">
        <div className="bg-red-500 bg-opacity-5 h-full w-full flex relative pt-10">
          <RellaxContainer
            as="h2"
            options={{
              speed: 0.25,
              center: true,
            }}
            className="lg:text-9xl md:text-7xl text-6xl text-red-900 font-extrabold absolute lg:-top-20 md:-top-12 -top-9 left-0 text-center w-full drop-shadow-lg"
          >
            contact me
          </RellaxContainer>
          <div className="w-full px-8 text-red-900">
            <div className="lg:h-56 lg:py-8 py-4 flex">
              <div className="mt-auto lg:py-0 py-8 flex lg:flex-row flex-col lg:divide-x lg:divide-y-0 divide-y divide-red-00 w-full justify-around">
                <div className="flex flex-col items-center w-full px-4 py-4">
                  <h4 className="lg:text-4xl text-2xl mb-4">email</h4>
                  <p className="lg:text-2xl text-xl font-unica-one text-red-800 flex flex-row items-center gap-2">
                    <i className="icomoon-envelop" />
                    <a className="underline" href="mailto:akhilk4k@gmail.com">
                      akhilk4k@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center w-full px-4 py-4">
                  <h4 className="lg:text-4xl text-2xl mb-4">address</h4>
                  <p className="lg:text-2xl text-xl font-unica-one text-red-800 flex flex-row items-center gap-2">
                    <i className="icomoon-location2" />
                    <span
                      className="underline"
                      rel="noreferrer"
                    >
                      Malappuram <br /> Kerala, India
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:h-56 lg:py-8 py-4">
              <div className="lg:mb-10 mb-8 mt-auto flex flex-row justify-center gap-8 text-3xl">
                <IconSet
                  icons={[
                    { type: 'icomoon', icon: 'twitter', link: 'https://twitter.com/akhiakl' },
                    { type: 'icomoon', icon: 'linkedin', link: 'https://linkedin.com/in/akhiakl' },
                    {
                      type: 'icomoon',
                      icon: 'stackoverflow',
                      link: 'https://stackoverflow.com/users/story/10472460',
                    },
                    {
                      type: 'icomoon',
                      icon: 'github',
                      link: 'https://github.com/akhiakl',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
