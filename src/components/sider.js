import { IconButton, Paper, Stack, SvgIcon } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Sider = () => {
  return (
    <Paper
      sx={{
        position: "absolute",
        top: "50vh",
        // height: "100%",
        left: "0",
      }}
    >
      <Stack>
        <IconButton href="https://github.com/mahdihawary">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/mahdihawary/">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://twitter.com/MahdiHawary">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://medium.com/@mahdihawary">
          <img src="https://img.icons8.com/fluency/24/null/medium-logo.png" />
        </IconButton>
      </Stack>
    </Paper>
  );
};
export default Sider;
