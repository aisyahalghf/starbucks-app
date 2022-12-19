import React from "react";
import { Icon } from "@iconify/react";

const SizeCup = (props) => {
  const { option, cup } = props;
  return (
    <div className="flex flex-col items-center">
      <Icon className="w-[70px] h-[70px] " icon="ci:coffee-togo" />
      <h1>{option}</h1>
      <h1>{cup}</h1>
    </div>
  );
};
export default SizeCup;
