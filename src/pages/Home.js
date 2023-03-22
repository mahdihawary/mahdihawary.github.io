import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

const HomePage = function () {
  return (
    <>
      <Typography
        variant={"h2"}
        // noWrap={"true"}
        sx={{
          paddingTop: "25%",
          width: "100%",
          textAlign: "center",
          color: "black",
        }}
      >
        Hello, I'm Mahdi Hawary
      </Typography>
      <Container sx={{ width: "50%" }}>
        <Typography
          variant={"h4"}
          sx={{
            marginTop: "10%",
            marginBottom: "10%",
            color: "black",
            textAlign: "center",
          }}
        >
          A fullstack web developer, welcome to my portfolio!
        </Typography>
      </Container>

      <Button
        variant="contained"
        sx={{ backgroundColor: "black", width: "30%" }}
      >
        <Link
          to="/Projects"
          sx={{ color: "inherit", textDecoration: "inherit" }}
        >
          Projects
        </Link>
      </Button>
    </>
  );
};

export default HomePage;
