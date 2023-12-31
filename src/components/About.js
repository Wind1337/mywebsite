import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { useTheme } from "@mui/material/styles";

function About() {
  React.useEffect(() => {
    document.title = "Carlsen Teo | About";
  }, []);

  const theme = useTheme();

  // Array of education details
  const education = [
    {
      title: "Singapore Institute of Technology - University of Glasgow",
      description: "Bachelor of Science in Computing Science",
      time: "2021 - 2024",
      image: "/images/logos/SIT.png",
      image2: "/images/logos/UofG.png",
    },
    {
      title: "Ngee Ann Polytechnic",
      description: "Diploma in Information Technology",
      time: "2016 - 2019",
      image: "/images/logos/NgeeAnnPoly.png",
    },
  ];

  // Array of project details
  const projects = [
    {
      title: "Mullvad Ping Python Script",
      description:
        "Python script to ping Mullvad VPN servers. Able to simultaneously ping multiple servers asynchronously.",
      tech: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
        },
      ],
      link: "https://github.com/Wind1337/mullvad-ping-py",
    },
    {
      title: "Laundry Scraper",
      description:
        "Python script using Selenium to scrape laundry machine availability from CircuitView (UK Laundry Provider) website.",
      tech: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
        },
      ],
      link: "https://github.com/Wind1337/Laundry-Scraper",
    },
    {
      title: "BusWhere",
      description: `Full stack mobile application that provides real-time bus arrival estimates for Singapore bus stops based on data from LTA DataMall. 
        Self-written API to handle data processing and caching. 
        Built with Expo (React Native), FastAPI (Python) with performance critical functions in Gin (Go), and Redis to cache responses. 
        Mobile application CI pipeline built with GitHub Actions.
        Backend deployed with Docker with NGINX as reverse proxy.`,
      tech: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        },
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Gin",
          icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg",
        },
      ],
      link: "https://play.google.com/store/apps/details?id=com.wind1337.buswhere",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{
            mt: 5,
            fontSize: "2.5rem",
            textAlign: "center",
          }}
          variant="h1"
          gutterBottom
        >
          About Me
        </Typography>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            bgcolor: theme.palette.background.paper,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3" gutterBottom>
              Hi, I'm{" "}
              <span style={{ color: theme.palette.text.secondary }}>
                Carlsen Teo.
              </span>
            </Typography>
            <Typography variant="body1">
              This page is a showcase of my education background and projects.
            </Typography>
          </Box>
          <Box sx={{ pl: 2, alignItems: "center" }}>
            <img
              src="/images/carlsen.png"
              alt="Carlsen Teo"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </Box>
        </Paper>

        <Typography sx={{ my: 5 }} variant="h2" gutterBottom>
          Education
        </Typography>

        <Grid container spacing={2}>
          {education.map((education, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  bgcolor: theme.palette.background.paper,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="h3" gutterBottom>
                    {education.title}
                  </Typography>
                  <Typography variant="body1" sx={{ pt: 0.8 }}>
                    {education.description}
                  </Typography>
                  <Typography variant="body2">{education.time}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ pl: 2 }}>
                    <img
                      src={education.image}
                      alt={education.title}
                      style={{ maxWidth: "75px", maxHeight: "75px" }}
                    />
                  </Box>
                  {education.image2 && (
                    <Box
                      sx={{
                        pl: 2,
                        pt: {
                          xs: 2,
                          md: 0,
                        },
                      }}
                    >
                      <img
                        src={education.image2}
                        alt={`${education.title} 2`}
                        style={{ maxWidth: "75px", maxHeight: "75px" }}
                      />
                    </Box>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography sx={{ my: 5 }} variant="h2" gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={3}
                sx={{ p: 2, bgcolor: theme.palette.background.paper }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Typography display="inline" variant="h3">
                    {project.title}
                  </Typography>
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        maxWidth: "36px",
                        height: "36px",
                        marginLeft: "0.5rem",
                        marginRight: "0.5rem",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </span>
                  ))}
                </Box>
                <Typography variant="body1" sx={{ pt: 0.8 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2">{project.time}</Typography>
                <Button
                  sx={{ p: 0, py: 1, mt: 1 }}
                  variant="text"
                  size="small"
                  color="secondary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
