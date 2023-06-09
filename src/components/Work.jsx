import {
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Link,
  CardActions,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

function Work() {
  const projects = [
    {
      id: 1,
      title: "Salvatore",
      description: "Spanish Ecom Platform",
      image:
        "https://camo.githubusercontent.com/3cb2df6f001c0c92e9bcb3225e0d01f15aea87ca88cd86b192a2c909fd325d8a/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313034303339373431393933313737393037322f313131353633333132373935363639373134382f696d6167652e706e673f77696474683d31333137266865696768743d363639",
      githubUrl: "https://github.com/ImBenni/my-ecom-project",
      websiteUrl: "https://salvatore-ecom.netlify.app",
    },
    {
      id: 2,
      title: "Knight",
      description: "Modern Auction Bidding Site",
      image:
        "https://camo.githubusercontent.com/a04ab742b36547988c54eaa44f1956b6e73238a3f371d61c43754bb8465ac518/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313034303339373431393933313737393037322f313131353634303338333035343032343737372f696d6167652e706e673f77696474683d373837266865696768743d363734",
      githubUrl: "https://github.com/ImBenni/auction-semester",
      websiteUrl: "https://knight-market.netlify.app",
    },
    {
      id: 3,
      title: "Holidaze",
      description: "Tropical Booking Platform",
      image:
        "https://camo.githubusercontent.com/9a8bd781e7ec91b661fbc85872187ea1f99abd7aaeaa757d77e910ec0bb855e1/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f313034303339373431393933313737393037322f313131353631353933313330313930343431342f696d6167652e706e673f77696474683d393631266865696768743d363734",
      githubUrl: "https://github.com/ImBenni/exam-holidaze",
      websiteUrl: "https://benni-holidaze.netlify.app",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ margin: "5rem 0" }}>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ boxShadow: "none" }}>
              <Link
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h4" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        "&:hover": {
                          transform: "scale(1.2)",
                          transition: "transform .2s",
                        },
                      }}
                    >
                      <GitHubIcon />
                    </Link>
                  </CardActions>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Work;
