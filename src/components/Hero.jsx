import { keyframes } from "@mui/system";
import { Typography, Container, Box } from "@mui/material";

function Hero() {
  const gradientAnimation = keyframes`
    0% {background-position: 0% 50%}
    50% {background-position: 100% 50%}
    100% {background-position: 0% 50%}
  `;

  const heroStyle = {
    background:
      "linear-gradient(270deg, #1e3c72, #2a5298, #2a82ba, #32a1db, #3fbfe3)",
    backgroundSize: "200% 200%",
    animation: `${gradientAnimation} 10s linear infinite`,
    color: "#fff",
    padding: {
      xs: "6em 0",
      sm: "8em 0",
      md: "12em 0",
    },
  };

  return (
    <Box sx={heroStyle}>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          fontWeight={500}
          sx={{
            fontSize: { xs: "3rem", sm: "3.75rem" },
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
          gutterBottom
        >
          I'm Benni
        </Typography>
        <Typography
          variant="h2"
          component="p"
          fontWeight={500}
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem" },
            textAlign: { xs: "center", sm: "center", md: "start" },
          }}
        >
          Content Creator <br />& Front-End Dev
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
