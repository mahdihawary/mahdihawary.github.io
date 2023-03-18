import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project);
  const card = (
    <React.Fragment>
      <CardMedia
        component="img"
        height="200"
        image="/assets/images/charrack.png"
        alt={project.name}
      />

      <CardContent>
        <Typography sx={{ color: "white" }}>{project.description}</Typography>
        <Typography sx={{ color: "white" }}>
          Skills Used: {project.skills}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton href={project.github}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          boxShadow: 1,
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#3d4047",
        }}
      >
        {card}
      </Card>
    </Box>
  );
};

export default ProjectCard;
