import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "White",
}));

const AboutPage = function () {
  return (
    <>
      <Paper sx={{ backgroundColor: "white", padding: "5%", marginTop: "5%" }}>
        <h1>About Me!</h1>
        <Divider variant="middle" sx={{ marginBottom: "5%" }} />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Container>
            <Typography>
              Hello! Thank you for visiting my about page. I am a fullstack web
              developer specializing in Javascript, React and Rails. Feel free
              to explore my projects🙂.
            </Typography>
            <Typography>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </Typography>
          </Container>
          <Container>
            <Typography
              id="decorated-list-demo"
              level="body3"
              textTransform="uppercase"
              fontWeight="lg"
              mb={1}
            >
              Skills
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Item>Ruby</Item>
              </Grid>
              <Grid item>
                <Item> React</Item>
              </Grid>
              <Grid item>
                <Item> Javascript</Item>
              </Grid>
              <Grid item>
                <Item> SQL Basics</Item>
              </Grid>
              <Grid item>
                <Item> Redux</Item>
              </Grid>
              <Grid item>
                <Item> Rails</Item>
              </Grid>
              <Grid item>
                <Item> Terminal</Item>
              </Grid>
              <Grid item>
                <Item> GIT</Item>
              </Grid>
              <Grid item>
                <Item> Github</Item>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Paper>
    </>
  );
};

export default AboutPage;
