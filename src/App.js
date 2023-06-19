import React from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
  // Detect user's preferred color scheme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // State for dark mode and whether the user has manually toggled the theme
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [userHasToggled, setUserHasToggled] = React.useState(
    localStorage.getItem("userHasToggled") === "true"
  );

  // Update localStorage whenever darkMode or userHasToggled changes
  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    localStorage.setItem("userHasToggled", userHasToggled ? "true" : "false");
  }, [darkMode, userHasToggled]);

  React.useEffect(() => {
    // Update the darkMode state only if the user hasn't manually toggled the theme
    if (!userHasToggled) {
      setDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode, userHasToggled]);

  const handleThemeToggle = () => {
    // When the user manually toggles the theme, update both states
    setUserHasToggled(true);
    setDarkMode(!darkMode);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavBar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
        <Box sx={{ width: "100%", px: 5, mt: 5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer darkMode={darkMode} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
