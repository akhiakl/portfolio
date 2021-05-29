import React from "react";

export type IconType = Array<
  | {
      type: "icomoon" | "devicon";
      icon: string;
    }
  | string
>;

interface IconSetProps {
  icons: IconType;
}

const IconSet = ({ icons }: IconSetProps): JSX.Element => (
  <>
    {icons.map((iconItem, i) => {
      const icon =
        typeof iconItem === "string"
          ? `devicon-${iconItem}`
          : `${iconItem.type}-${iconItem.icon}`;
      const title = icon.split("-")[1];
      return <i key={`${icon}-${i}}`} className={icon} title={title}></i>;
    })}
  </>
);

export default IconSet;
