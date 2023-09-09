import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Home() {
  React.useEffect(() => {
    document.title = "Carlsen Teo | Home";
  }, []);

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography
          sx={{
            mt: 5,
            fontSize: "3rem",
          }}
          variant="h1"
        >
          Carlsen Teo
        </Typography>
        <Box
          sx={{
            border: 1,
            borderColor: "divider",
            my: 2,
            width: "50%",
            mx: "auto",
          }}
        ></Box>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: "Arial" }}>
          Year 2 CS Undergraduate
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
