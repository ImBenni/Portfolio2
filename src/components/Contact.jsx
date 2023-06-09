import { Typography, Container } from "@mui/material";

function Contact() {
  return (
    <section id="contact">
      <Container
        maxWidth="md"
        sx={{
          padding: "5em 0 8rem 0",
          paddingBottom: "7rem",
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
          Whenever I get down to it, I'll make some way to contact me. <br />
          But for now I don't have any professional way of doing so.
          <br />
          <br />
          Sorry :P
        </Typography>
      </Container>
    </section>
  );
}

export default Contact;
