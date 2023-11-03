import React from "react";
import { Route, Routes } from "react-router-dom";

import Games from "../pages/Games/Games";
import NewGame from "../pages/Games/NewGame";

import Users from "../pages/Users/Users";

import Teams from "../pages/Teams/Teams";
import NewTeam from "../pages/Teams/NewTeam";

import NotFound from "../pages/NotFound";


const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Games />} />
      <Route path="games/new/" element={<NewGame />} />

      <Route path="users/" element={<Users />} />

      <Route path="Teams" element={<Teams />} />
      <Route path="Teams/new/" element={<NewTeam />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default NavigationRoutes;
