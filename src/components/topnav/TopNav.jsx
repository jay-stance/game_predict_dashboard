import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setNotificationCount } from "../../redux/slices/utilsSlice";

import AppText from "../AppText/AppText";
import "./TopNav.css";

const TopNav = ({ toggleBar, setToggleBar }) => {
  const { notificationCount } = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  const getCount = async () => {};

  useEffect(() => {
    getCount();
  }, []);

  return (
    <div className="TopNav !z-10">
      <div className="topnav_left">
        <i onClick={() => setToggleBar(!toggleBar)} className="fa fa-bars bell_icon"></i>
      </div>
      <div className="topnav_center">
        <AppText content="Dashboard" />
      </div>
      <div className="topnav_right">
        {/* <Link style={{ textDecoration: "none" }} to="/activities">
          <i className="fa fa-bell bell_icon"></i>
        </Link>
        {notificationCount > 0 && (
          <div className="notification_count">
            <AppText invert content={notificationCount} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TopNav;
