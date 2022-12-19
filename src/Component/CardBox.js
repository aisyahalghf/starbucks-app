import { Box } from "@chakra-ui/react";
import React from "react";

const CardBox = (props) => {
  const { img, header, text, button } = props;
  return (
    <Box
      w="600px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="20px"
      bg="white"
    >
      <img className="w-[600px]" src={img} />
      <Box className=" font-semibold m-4 ">{header}</Box>
      <Box className="ml-4">{text}</Box>
      <div className=" flex justify-end ">
        <Box
          as="button"
          borderRadius="3xl"
          bg="green.800"
          color="white"
          m={4}
          px={4}
          h={8}
        >
          {button}
        </Box>
      </div>
    </Box>
  );
};
export default CardBox;
