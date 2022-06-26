import React from "react";

import { BackgroundColorChanger } from "./Pages/BackgroundColorChanger";
import { Calculator } from "./Pages/Calculator";
import { Index } from "./Pages/Index";
import { Link, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route
        path="/backgroundColorChanger"
        element={<BackgroundColorChanger />}
      />
    </Routes>
  );
};
