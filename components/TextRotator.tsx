import classNames from "classnames";
import { useState, useEffect } from "react";

interface TextRotatorProps {
  textArr: string[];
}

const TextRotator = ({ textArr }: TextRotatorProps) => {
  const [activeSkillsetIndex, setActiveSkillsetIndex] = useState<number>(0);
  const [startAnimation, setStartAnimation] = useState<boolean>(false);
  const [timerInitialDelay, setTimerInitialDelay] = useState<number>(1500);
  const setIndexWithDelay = (index: number) => {
    setTimeout(() => {
      setActiveSkillsetIndex(index);
    }, 3000);
  };
  useEffect(() => {
    setStartAnimation(true);
    setTimeout(() => {
      setTimerInitialDelay(0);
      if (activeSkillsetIndex === textArr.length - 1) {
        setIndexWithDelay(0);
      } else {
        setIndexWithDelay(activeSkillsetIndex + 1);
      }
    }, timerInitialDelay);
  }, [activeSkillsetIndex]);

  return (
    <div
      className={classNames("text-2xl text-red-500", {
        "animate-dim": startAnimation,
      })}
    >
      {textArr[activeSkillsetIndex]}
    </div>
  );
};
export default TextRotator;
