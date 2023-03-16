import { Link } from "react-router-dom";
const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.map((proj) => (
        <Link
          key={proj.name}
          className="project-list-item"
          to={`/projects/${proj.name}`}
        >
          <h3>{proj.title}</h3>
          <p>{proj.content.substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ProjectsList;
