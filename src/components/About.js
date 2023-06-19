import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { useTheme } from "@mui/material/styles";

function About() {
  const theme = useTheme();

  // Array of education details
  const education = [
    {
      title: "Singapore Institute of Technology - University of Glasgow",
      description: "Bachelor of Science in Computing Science",
      time: "2021 - 2024",
    },
    {
      title: "Ngee Ann Polytechnic",
      description: "Diploma in Information Technology",
      time: "2016 - 2019",
    },
  ];

  // Array of project details
  const projects = [
    {
      title: "Mullvad Ping Python Script",
      description:
        "Python script to ping Mullvad VPN servers. Able to simultaneously ping multiple servers asynchronously.",
      link: "https://github.com/Wind1337/mullvad-ping-py",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: {
          xs: 1,
          md: 7,
        },
      }}
    >
      <Typography sx={{ my: 5 }} variant="h1" gutterBottom>
        About Me
      </Typography>
      <Paper
        elevation={3}
        sx={{ p: 2, bgcolor: theme.palette.background.paper }}
      >
        <Typography variant="h3" gutterBottom>
          Hi, I'm Carlsen Teo.
        </Typography>
        <Typography variant="body1">
          This page is a showcase of my education background and projects.
        </Typography>
      </Paper>

      <Typography sx={{ my: 5 }} variant="h2" gutterBottom>
        Education
      </Typography>

      <Grid container spacing={2}>
        {education.map((education, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 2, bgcolor: theme.palette.background.paper }}
            >
              <Typography variant="h3" gutterBottom>
                {education.title}
              </Typography>
              <Typography variant="body1" sx={{ pt: 0.8 }}>
                {education.description}
              </Typography>
              <Typography variant="body2">{education.time}</Typography>
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
              <Typography variant="h3" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ pt: 0.8 }}>
                {project.description}
              </Typography>
              <Typography variant="body2">{project.time}</Typography>
              <Button
                sx={{ p: 0, py: 1, mt: 1 }}
                variant="text"
                size="small"
                color="primary"
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
  );
}

export default About;
