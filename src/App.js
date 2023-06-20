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

function App() {
  // State for dark mode and whether the user has manually toggled the theme
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkMode") === "true"
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
        typography: {
          h1: {
            fontSize: "2rem",
            fontWeight: 700,
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: 500,
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: 400,
          },
          // Add more custom typography styles as needed
        },
      }),
    [darkMode]
  );

  // Detect user's preferred color scheme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <NavBar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
          <Box
            sx={{
              width: "100%",
              px: {
                xs: 1
              },
              flex: "1 0 auto",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer darkMode={darkMode} />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
