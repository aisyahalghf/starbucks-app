import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <div className=" flex gap-2 ml-10 mt-[20px]  ">
        <Icon className="text-[35px]" icon="mdi:spotify" />
        <Icon className="text-[35px]" icon="ic:outline-facebook" />
        <Icon className="text-[35px]" icon="foundation:social-path" />
        <Icon
          className="text-[35px]"
          icon="entypo-social:instagram-with-circle"
        />
        <Icon
          className="text-[35px]"
          icon="entypo-social:youtube-with-circle"
        />
      </div>
      <div className="ml-10 mt-[20px] text-[17px] ">
        <div className="mt-[10px]">Privacy Notice</div>
        <div className="mt-[10px]">Term of Use</div>
        <div className="mt-[10px]">Do Not Share My Personal Information</div>
        <div className="mt-[10px]">CA Supply Chain Act</div>
        <div className="mt-[10px]">Cookie Preferences</div>
      </div>
      <div className="ml-10 mt-[15px] text-[15px] text-gray-400 ">
        © 2022 Starbucks Coffee Company. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
