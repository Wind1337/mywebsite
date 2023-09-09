import React from "react";
import { TypeAnimation } from "react-type-animation";
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
        <TypeAnimation
          sequence={[
            "I am a CS Undergraduate",
            2000,
            "I am a Programmer",
            2000,
            "I am a Foodie",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </Box>
    </Container>
  );
}

export default Home;
