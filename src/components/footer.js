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
        <Typography level="body2">MahdiHawary</Typography>

        <Typography level="body3" sx={{ ml: "auto" }}>
          ©2023 Made By Mahdi Hawary
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
