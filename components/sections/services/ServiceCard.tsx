import classNames from "classnames";
import React, { useState } from "react";
interface ServiceCardProps {
  headerIcon: string;
  title: string;
  description: string;
  skillIcons: string[];
}

const ServiceCard = ({
  headerIcon,
  title,
  description,
  skillIcons,
}: ServiceCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped(!flipped);
  return (
    <div className="relative group border border-dashed border-gray-900 w-full max-w-72 h-86">
      <div className=" h-full w-full bg-gray-50 shadow-lg flex flex-col transition-transform transform-gpu md:group-hover:-translate-x-4 md:group-hover:-translate-y-4 md:group-hover:ring-red-500">
        <div
          className={classNames(
            "flip-card ring-2 ring-red-900  md:group-hover:bg-red-500 h-full w-full md:group-hover:text-gray-50",
            { flipped }
          )}
        >
          <div className="flip-card-face absolute left-0 right-0 top-0 bottom-0 p-8 md:group-hover:invisible flex flex-col gap-4 items-center justify-center h-full">
            <div className="w-16 h-16 flex justify-center items-center rounded-full border-red-500 border">
              <span className="text-4xl material-icons">{headerIcon}</span>
            </div>
            <h2 className="md:text-2xl text-xl uppercase font-bold border-dotted border-b-2">
              {title}
            </h2>
            <p className="text-gray-600 text-justify">{description}</p>
            <a onClick={flip} className="cursor-pointer md:hidden block">
              <span className="material-icons">arrow_forward</span>
            </a>
          </div>
          <div className="flip-card-face flip-card-face-back absolute left-0 right-0 top-0 bottom-0 p-10 md:group-hover:flex md:hidden flex flex-col justify-center items-center bg-red-500 text-gray-50">
            <div className="flex-1 grid grid-cols-3 grid-rows-4 gap-4 items-center justify-items-center skillsets text-left text-5xl">
              {skillIcons.map((icon) => (
                <i
                  key={icon + Math.random()}
                  className={`devicon-${icon}`}
                  title={icon}
                ></i>
              ))}
            </div>
            <a onClick={flip} className="cursor-pointer md:hidden block">
              <span className="material-icons">arrow_back</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
