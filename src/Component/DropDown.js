import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const DropDown = (props) => {
  const { text, item1, item2, item3, item4, item5 } = props;
  return (
    <div className="flex flex-row justify-between ml-10 mr-10 mt-5 mb-[20px]">
      <div className=" text-[20px] ">{text}</div>
      <Menu>
        <MenuButton
          bg="white"
          as={Button}
          rightIcon={<ChevronDownIcon className="text-[30px]" />}
        ></MenuButton>
        <MenuList>
          <MenuItem>{item1}</MenuItem>
          <MenuItem>{item2}</MenuItem>
          <MenuItem>{item3}</MenuItem>
          <MenuItem>{item4}</MenuItem>
          <MenuItem>{item5}</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
export default DropDown;
