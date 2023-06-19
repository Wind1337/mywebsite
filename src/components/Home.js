import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Home() {
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
      Website of Carlsen Teo
      </Typography>
      <Typography variant="body1" gutterBottom>
        Work in Progress while I think of something witty to write here
      </Typography>
    </Box>
  );
}

export default Home;
