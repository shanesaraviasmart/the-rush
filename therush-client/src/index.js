import "./index.css";
import "./fonts/NeueAachenProBlkIt.ttf";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import React from "react";
import ReactDOM from "react-dom";
import RushStats from "./components/RushStats/RushStats";
import { ThemeProvider } from "@mui/styles";
import reportWebVitals from "./reportWebVitals";

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <Routes>
            {/* To catch all routes, only for take home assignment purposes */}
            <Route path="/*" element={<RushStats />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
