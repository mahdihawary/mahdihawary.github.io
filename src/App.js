import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import NavBar from "./navBar";
import ProjectPage from "./pages/projectPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route
              path="/projects/:projectId"
              element={<ProjectPage />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
