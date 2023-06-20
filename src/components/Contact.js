import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Contact() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ my: 5 }} variant="h1" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the contact page where you can't contact me yet.
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
