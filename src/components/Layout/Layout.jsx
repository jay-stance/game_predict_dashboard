import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import NavigationRoutes from "../NavigationRoutes";
import { ToastContainer } from "react-toastify";
import { Spinner } from "loading-animations-react";
import "./Layout.css";

import { useSelector } from "react-redux";

const themeReducer = {
  mode: "",
  color: "",
};

const Layout = () => {
  const [toggleBar, setToggleBar] = useState(true);
  const { loading } = useSelector((state) => state.utils);

  const showBar = toggleBar ? "show" : "hide";

  return (
    <BrowserRouter>
      <div className="toast_container !z-50">
        <ToastContainer autoClose={3000} />
      </div>

      {loading && (
        <div className="loading_container">
          <div className="loading_main">
            <Spinner color1="blue" color2="#fff" textColor="rgba(0,0,0, 0.5)" />
          </div>
        </div>
      )}

      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        <div className={`layout__sidebar ${showBar}`}>
          <Sidebar />
        </div>
        <div className={`layout__content ${showBar}`}>
          <div className="layout__topnav !z-[1]">
            <TopNav toggleBar={toggleBar} setToggleBar={setToggleBar} />
          </div>
          <div className="layout__content_main !p-3 lg:!p-5">
            <NavigationRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
