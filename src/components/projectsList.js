import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import ProjectCard from "./projectCard";
const ProjectsList = ({ projects }) => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 5 }}>
      {projects.map((project) => (
        <Grid item xs={6} key={project.name}>
          <Box sx={{ width: 1 / 2, color: "primary.main" }}>
            <ProjectCard project={project}></ProjectCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsList;
