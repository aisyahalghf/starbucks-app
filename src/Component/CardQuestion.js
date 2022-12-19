import { Box, Button } from "@chakra-ui/react";
import React from "react";

const CardQuestion = () => {
  return (
    <Box
      w="600px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      mt="30px"
    >
      <Box fontSize="25px" m={4} fontWeight="bold">
        Answer a few questions to find something new{" "}
      </Box>
      <hr className=" m-4 "></hr>
      <Box fontWeight="semibold" ml={4}>
        What type of drink are you looking for?
      </Box>
      <Box
        as="button"
        borderRadius="xl"
        bg="#d4e9e2"
        color="black"
        m={4}
        px={4}
        h="100px"
        w="560px"
        textAlign="left"
      >
        <div className=" flex items-center justify-between ">
          <div>
            <div className=" font-bold ">Iced</div>
            <div className=" font-semibold ">Cool off and uplift</div>
          </div>
          <div>
            <img
              className=" object-none "
              src="https://app.starbucks.com/weblx/images/drink-finder/iced_drink.png"
            />
          </div>
        </div>
      </Box>
      <Box
        as="button"
        borderRadius="xl"
        bg="#d4e9e2"
        color="black"
        ml={4}
        mb={4}
        px={4}
        h="100px"
        w="560px"
        textAlign="left"
      >
        <div className=" flex items-center justify-between ">
          <div>
            <div className=" font-bold ">Hot</div>
            <div className=" font-semibold ">Warm up and get going</div>
          </div>
          <div>
            <img
              className=" w-[50px] "
              src="https://app.starbucks.com/weblx/images/drink-finder/hot_drink.png"
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};
export default CardQuestion;
