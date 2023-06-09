import { styled } from "@mui/system";
import { Container, Typography, Divider as MuiDivider } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";
import About from "../components/About";
import Contact from "../components/Contact";

function Portfolio() {
  const Divider = styled(MuiDivider)(({ theme }) => ({
    "&::before": {
      borderTop: "3px solid",
      borderColor: "#000",
    },
    "&::after": {
      borderTop: "3px solid",
      borderColor: "#000",
    },
  }));

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Container maxWidth="lg">
        <section id="projects">
          <Divider textAlign="left">
            <Typography
              variant="h4"
              fontWeight={500}
              sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
            >
              Projects
            </Typography>
          </Divider>
          <Work />
        </section>
        <Divider textAlign="left">
          <Typography
            variant="h4"
            fontWeight={500}
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
          >
            Contact Me
          </Typography>
        </Divider>
      </Container>
      <Contact />
    </>
  );
}

export default Portfolio;
