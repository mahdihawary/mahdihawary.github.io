import projects from "./project-content";

import ProjectsList from "../components/projectsList";

const ProjectsPage = function () {
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList projects={projects}></ProjectsList>
    </>
  );
};

export default ProjectsPage;
