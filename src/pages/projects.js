import projects from "./project-content";

import ProjectsList from "../components/projectsList";
import { Container } from "@mui/material";

const ProjectsPage = function () {
  return <ProjectsList projects={projects}></ProjectsList>;
};

export default ProjectsPage;
