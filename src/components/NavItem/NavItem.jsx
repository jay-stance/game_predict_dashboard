import React from "react";
import AppText from "../AppText/AppText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavItem.css";

const NavItem = ({ style, name, active, icon, navClicked }) => {
  const active_link = active === name ? "bg-main-bg" : "bg-white";

  return (
    <div className={` border-b-[10] border-b-main-bg pl-5 flex justify-start items-center mb-2 pl-3 py-4 ${active_link}`} style={style} onClick={() => navClicked(name)}>
      <i className={`${icon} ${active === name ? "text-white" : "text-black"} !pr-2`}></i>
      <AppText invert={active === name} content={name} />
    </div>
  );
};

export default NavItem;
