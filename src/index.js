import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "./components/ui/provider";
import reportWebVitals from "./reportWebVitals";
import MainLayout from "./layout/main";
import HomeView from "./pages/main";
import AboutView from "./pages/about";
import ProjectsView from "./pages/projects";
import ContactView from "./pages/contact";
import TestimoniesView from "./pages/testimonies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./design/main.scss";
import { Box } from "@chakra-ui/react";
// Pages wrapped with MainLayout
const HomePage = MainLayout(HomeView);
const AboutPage = MainLayout(AboutView);
const ProjectsPage = MainLayout(ProjectsView);
const ContactPage = MainLayout(ContactView);
const TestimoniesPage = MainLayout(TestimoniesView);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust loading duration as needed
  }, []);
  return (
    <Provider>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              display: "flex",
              height: "100vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Box className="loader">
              <Box className="loader-square" bg={"#FF7E21"}></Box>
              <Box className="loader-square" bg={"#FF7E21"}></Box>
              <Box className="loader-square" bg={"#FF7E21"}></Box>
              <Box className="loader-square" bg={"#FF7E21"}></Box>
              <Box className="loader-square" bg={"#FF7E21"}></Box>
              <Box className="loader-square" bg={"#FF7E21"}></Box>
              <Box className="loader-square" bg={"#FF7E21"}></Box>
            </Box>
          </motion.div>
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/testimonies" element={<TestimoniesPage />} />
            </Routes>
          </Router>
        )}
      </AnimatePresence>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
