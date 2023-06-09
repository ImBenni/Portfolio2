import { Typography, Container, Box } from '@mui/material';

function Hero() {
  return (
    <Box sx={{ 
      backgroundColor: '#1456bf',
      color: '#fff',
      padding: '16em 0',

    }}>
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" fontWeight={500} gutterBottom>
          I'm Benni
        </Typography>
        <Typography variant="h2" component="p" fontWeight={500}>
          Content Creator <br />& Front End Dev
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
