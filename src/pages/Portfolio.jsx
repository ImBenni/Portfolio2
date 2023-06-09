import { styled } from '@mui/system';
import { Container, Typography, Box, Divider as MuiDivider } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";



function Portfolio() {

    const Divider = styled(MuiDivider)(({ theme }) => ({
        '&::before': {
          borderTop: '3px solid',
          borderColor: "#000",
        },
        '&::after': {
          borderTop: '3px solid',
          borderColor: "#000",
        },
      }));

  return (
    <>
      <Header />
      <Hero />
      <Container maxWidth="md">
        <Box
          sx={{
            padding: "8em 0",
            paddingBottom: "7rem",
          }}
        >
          <Typography variant="h4" component="p" lineHeight={"1.5"} fontSize={"1.9rem"} fontWeight={500} gutterBottom>
            As a content creator on YouTube and Twitch for over 4 years, I've honed my skills in video editing using
            Premiere Pro and After Effects.
            <br />
            <br />
            Outside of content creation, I enjoy front end development as a hobby, with a proficiency in languages like
            Lua, Javascript, HTML, and CSS.
            <br />
            <br />
            My love for coding also extends to the occasional game project where I utilize Lua. I'm always eager to
            learn and apply new skills in my projects.
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xl">
        <Divider textAlign="left">
        <Typography variant='h4' fontWeight={500}>Work</Typography>
        </Divider>
      </Container>
    </>
  );
}

export default Portfolio;
