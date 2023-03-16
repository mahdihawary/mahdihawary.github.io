import { useParams } from "react-router-dom";
import NotFound from "./notfound";
import projects from "./project-content";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find((proj) => proj.name === projectId);
  if (!project) {
    return <NotFound />;
  }
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </>
  );
};

export default ProjectPage;
