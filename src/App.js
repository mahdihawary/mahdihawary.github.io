import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import NavBar from "./components/navBar";
import NotFound from "./pages/notfound";
import Container from "@mui/material/Container";
import ContactPage from "./pages/contactPage";
import Footer from "./components/footer";
import Sider from "./components/sider";

function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          backgroundImage:
            "/elegant-white-background-withshiny-lines/17580.jpg",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Sider />
        <Container
          id="page-body"
          maxWidth="md"
          sx={{ height: "100vh", width: "100vw", color: "white" }}
          duration={3000}
        >
          <Routes>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<HomePage />}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/About"}
              element={<AboutPage />}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/Projects"}
              element={<ProjectsPage />}
            ></Route>
            <Route
              path={process.env.PUBLIC_URL + "/Contact"}
              element={<ContactPage />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
