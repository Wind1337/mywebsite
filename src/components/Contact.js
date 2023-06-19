import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Contact() {
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
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the contact page where you can't contact me yet.
      </Typography>
    </Box>
  );
}

export default Contact;
