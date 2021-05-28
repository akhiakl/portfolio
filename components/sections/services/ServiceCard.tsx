import classNames from "classnames";
import React, { useState } from "react";
interface ServiceCardProps {
  headerIcon: string;
  title: string;
  gridPosition?: string;
  skillIcons: Array<
    | {
        type: "icomoon" | "devicon";
        icon: string;
      }
    | string
  >;
}

const ServiceCard = ({
  headerIcon,
  title,
  skillIcons,
  gridPosition,
}: ServiceCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped(!flipped);

  const renderIconsets = () =>
    skillIcons.map((skillIcon) => {
      const icon =
        typeof skillIcon === "string"
          ? `devicon-${skillIcon}`
          : `${skillIcon.type}-${skillIcon.icon}`;
      const title = icon.split("-")[1];
      return (
        <i key={`${icon}-${Math.random()}`} className={icon} title={title}></i>
      );
    });
  return (
    <div
      data-aos="flip-up"
      className={`relative group border-2 border-dashed border-black-50 w-full max-w-72 h-86 ${gridPosition}`}
    >
      <div className=" h-full w-full bg-gray-50 shadow-xl flex flex-col transition-transform transform-gpu md:group-hover:-translate-x-4 md:group-hover:-translate-y-4 md:group-hover:ring-red-500">
        <div
          className={classNames(
            "flip-card ring-2 ring-black-50 md:group-hover:ring-red-600  md:group-hover:bg-red-500 h-full w-full md:group-hover:text-gray-50",
            { flipped }
          )}
        >
          <div className="flip-card-face absolute text-black-50 left-0 right-0 top-0 bottom-0 p-8 md:group-hover:invisible flex flex-col gap-4 items-center justify-center h-full">
            <div className="w-16 h-16 flex justify-center items-center rounded-full border-red-500 border mt-auto">
              <span className="text-4xl material-icons">{headerIcon}</span>
            </div>
            <h2 className="md:text-2xl text-xl text-center uppercase font-bold border-dotted border-b-2 mb-auto">
              {title}
            </h2>
            {/* {description ? (
              <p className="text-gray-600 text-center mb-auto">{description}</p>
            ) : null} */}
            <a
              onClick={flip}
              className="cursor-pointer md:hidden block mt-auto"
            >
              <span className="material-icons">arrow_forward</span>
            </a>
          </div>
          <div className="flip-card-face flip-card-face-back absolute left-0 right-0 top-0 bottom-0 p-8 md:group-hover:flex md:hidden flex flex-col justify-center items-center bg-red-500 text-gray-50">
            <div className="flex-1 w-full grid grid-cols-3 grid-rows-4 gap-4 items-center justify-items-center skillsets text-left text-5xl">
              {renderIconsets()}
            </div>
            <a onClick={flip} className="cursor-pointer md:hidden block mt-3">
              <span className="material-icons">arrow_back</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;