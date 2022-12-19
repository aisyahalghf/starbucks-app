import React from "react";

const ProductCard = (props) => {
  const { img, text } = props;
  return (
    <div className="flex items-center gap-3 mb-[30px]">
      <img
        className="w-[120px] h-[120px] rounded-[100px]"
        src={img}
        alt={text}
      />
      <span className=" text-[20px] ">{text}</span>
    </div>
  );
};

export default ProductCard;
