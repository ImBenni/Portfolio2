import { keyframes } from "@mui/system";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

function Header() {
  const buttonStyles = {
    fontSize: "1.2rem",
    margin: "0 1rem",
    fontWeight: "500",
    textTransform: "none",
  };

  const gradientAnimation = keyframes`
    0% {background-position: 0% 50%}
    50% {background-position: 100% 50%}
    100% {background-position: 0% 50%}
  `;

  const appBarStyle = {
    background:
      "linear-gradient(270deg, #1e3c72, #2a5298, #2a82ba, #32a1db, #3fbfe3)",
    backgroundSize: "200% 200%",
    animation: `${gradientAnimation} 10s linear infinite`,
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppBar position="fixed" elevation={0} sx={appBarStyle}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontSize: "2.8rem", fontWeight: "600" }}
          >
            <Box
              component="span"
              onClick={scrollToTop}
              sx={{
                display: "inline-block",
                animation: "wobble 1s forwards",
                transition: "color .2s",
                "&:hover": {
                  color: "#dbdbdb",
                  animation: "rotate .5s forwards",
                },
                cursor: "pointer",
              }}
            >
              B
            </Box>
          </Typography>
          <Button color="inherit" href="#about" sx={{ ...buttonStyles }}>
            About
          </Button>
          <Button color="inherit" href="#projects" sx={{ ...buttonStyles }}>
            Projects
          </Button>
          <Button color="inherit" href="#contact" sx={{ ...buttonStyles }}>
            Contact
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
