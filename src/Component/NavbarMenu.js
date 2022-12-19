import React from "react";
import { Link } from "react-router-dom";

const NavbarMenu = (props) => {
  const { link1, link2, link3, link4, text1, text2, text3, text4 } = props;
  return (
    <div className="border border-slate-300 shadow-lg h-[40px] flex items-center gap-3 pl-[35px] text-xs font-sans  bg-white sticky top-[70px]">
      <Link to={link1}> {text1} </Link>
      <Link to={link2}> {text2}</Link>
      <Link to={link3}> {text3}</Link>
      <Link to={link4}> {text4}</Link>
    </div>
  );
};

export default NavbarMenu;
