import React from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout/Layout";
import Login from "../pages/Login/Login";

const Routes = () => {
  const { loggedIn } = useSelector((state) => state.user);

  return loggedIn ? <Layout /> : <Login />;
};

export default Routes;
