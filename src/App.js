import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    // Add more custom typography styles as needed
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Box sx={{ width: "100%", px: 5, mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
