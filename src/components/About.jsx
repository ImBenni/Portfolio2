import { Typography, Container } from "@mui/material";

function About() {
  return (
    <section id="about">
      <Container
        maxWidth="md"
        sx={{
          padding: "5em 0 8rem 0",
        }}
      >
        <Typography
          variant="h4"
          component="p"
          lineHeight={"1.5"}
          fontWeight={500}
          gutterBottom
          sx={{ padding: "0 1rem", fontSize: { xs: "1.4rem", sm: "1.8rem" } }}

        >
          As a content creator on YouTube and Twitch for over 4 years, I've
          honed my skills in video editing using Premiere Pro and After Effects.
          <br />
          <br />
          Outside of content creation, I enjoy front-end development as a hobby,
          with a proficiency in languages like Lua, Javascript, HTML, and CSS.
          <br />
          <br />
          My love for coding also extends to the occasional game project where I
          utilize Lua. I'm always eager to learn and apply new skills in my
          projects.
        </Typography>
      </Container>
    </section>
  );
}

export default About;
