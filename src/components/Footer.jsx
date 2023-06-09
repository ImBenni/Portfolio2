import { Container, Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)", color: "#555", padding: "1em 0" }}>
      <Container maxWidth="md">
        <Typography align="center">
          &copy; 2023 Benni
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
