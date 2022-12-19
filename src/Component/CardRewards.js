import React from "react";

const CardReward = (props) => {
  const { img, text } = props;
  return (
    <div>
      <img className="w-[350px]  rounded-lg " src={img} alt="" />
      <p className="w-[340px] mt-[20px] font-normal text-[20px] mb-[20px] text-justify ">
        {text}
      </p>
    </div>
  );
};
export default CardReward;
