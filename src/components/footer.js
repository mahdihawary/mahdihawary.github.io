import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Container sx={{ backgroundColor: "#3d4047" }}>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          alignItems: "center",
          gap: 2,
          paddingBottom: "5%",
          paddingLeft: "5%",
          color: "White",
          display: "flex",
        }}
      >
        <Typography level="body2">©2023 Made By Mahdi Hawary</Typography>
        {/* <Typography level="body3" sx={{ ml: "auto" }}>
          ©2023 Made By Mahdi Hawary
        </Typography> */}
        <Typography level="body3" sx={{ ml: "auto" }}>
          <a href="https://www.freepik.com/free-vector/elegant-white-background-with-shiny-lines_4077186.htm#query=subtle%20background&position=2&from_view=keyword&track=ais">
            Background by starline
          </a>{" "}
          on Freepik
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
