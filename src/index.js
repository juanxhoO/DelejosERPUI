/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { AuthProvider } from "context/AuthProvider";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "context/DataProvider";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <MaterialUIControllerProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </MaterialUIControllerProvider>
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
