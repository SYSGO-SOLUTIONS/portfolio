import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
// import { ColorModeProvider } from "./components/ui/color-mode";
import reportWebVitals from "./reportWebVitals";
// layout
import MainLayout from "./layout/main";
// pages
import HomeView from "./pages/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
const HomePage = MainLayout(HomeView);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
