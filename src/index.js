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
import AboutView from "./pages/about";
import ProjectsView from "./pages/projects";
import ContactView from "./pages/contact";
import TestimoniesView from "./pages/testimonies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
const HomePage = MainLayout(HomeView);
const AboutPage = MainLayout(AboutView);
const ProjectsPage = MainLayout(ProjectsView);
const ContactPage = MainLayout(ContactView);
const TestimoniesPage = MainLayout(TestimoniesView);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonies" element={<TestimoniesPage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
