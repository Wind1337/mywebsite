import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ my: 5 }} variant="h1" gutterBottom>
          Website of Carlsen Teo
        </Typography>
        <Typography variant="body1" gutterBottom>
          Work in Progress while I think of something witty to write here
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
