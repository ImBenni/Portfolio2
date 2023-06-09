import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function Header() {
  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontSize: "2.8rem", fontWeight:"600", }}>
            <Box component="span" sx={{
              display: 'inline-block',
              animation: 'wobble 1s forwards',
              transition: "color .2s",
              '&:hover': {
                color: "#dbdbdb",
                animation: 'rotate .5s forwards'
              },
              cursor:'pointer'
            }}>
              B
            </Box>
          </Typography>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
