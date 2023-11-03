import React, { useState } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/userSlice";

import logo from "../../assets/logo.png";
import AppText from "../AppText/AppText";
import NavItem from "../NavItem/NavItem";
import "./Sidebar.css";

export default function Sidebar() {
  const [dropDown, setDropDown] = useState(false);
  const [activeLink, setActiveLink] = useState("Games");

  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="user_card">
        {/* <img className="profile_img" src={logo} alt="profile" /> */}
        {/* <AppText style={{ fontWeight: "bold", color: "black", marginLeft: 5 }} content="Snapshup" /> */}
      </div>

      <div className="sidebar__menu">
        <Link style={{ textDecoration: "none" }} to="/">
          <NavItem
            active={activeLink}
            name="Games"
            icon={"fa fa-gamepad"}
            navClicked={(name) => setActiveLink(name)}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/Users">
          <NavItem
            active={activeLink}
            name="Users"
            icon={"fa fa-users"}
            navClicked={(name) => setActiveLink(name)}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="/Teams">
          <NavItem
            active={activeLink}
            name="Teams"
            icon={"fa fa-database"}
            navClicked={(name) => setActiveLink(name)}
          />
        </Link>

        {/* <Link style={{ textDecoration: "none" }} to="/expenses">
          <NavItem
            active={activeLink}
            name="Expenses"
            icon={"fa fa-credit-card"}
            navClicked={(name) => setActiveLink(name)}
          />
        </Link> */}

        <NavItem
          active={activeLink}
          name="Log Out"
          icon={"fa fa-sign-out"}
          navClicked={(name) => {
            dispatch(logOut());
          }}
        />
      </div>
    </div>
  );
}
