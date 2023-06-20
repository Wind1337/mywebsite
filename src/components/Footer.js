import * as React from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer({ darkMode }) {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        mt: 5,
        py: 1,
        borderTop: 1,
        borderColor: "grey.500",
      }}
    >
      <a
        href="https://www.github.com/Wind1337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Github Profile" sx={{ mx: 0.5 }}>
          <GitHubIcon style={{ color: darkMode ? "white" : "black" }} />
        </IconButton>
      </a>

      <a
        href="https://www.linkedin.com/in/carlsen-teo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="LinkedIn Profile" sx={{ mx: 0.5 }}>
          <LinkedInIcon style={{ color: darkMode ? "white" : "black" }} />
        </IconButton>
      </a>
    </Box>
  );
}

export default Footer;
