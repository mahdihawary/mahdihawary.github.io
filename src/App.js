import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import NavBar from "./components/navBar";
import NotFound from "./pages/notfound";
import Container from "@mui/material/Container";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Container
          id="page-body"
          maxWidth="sm"
          sx={{ height: "100vh", width: "100vw" }}
          duration={3000}
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
