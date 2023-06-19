import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MemoryIcon from "@mui/icons-material/Memory";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import CssBaseline from "@mui/material/CssBaseline";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function NavBar({ darkMode, handleThemeToggle}) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpenNavMenu = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseNavMenu = () => {
    setIsDrawerOpen(false);
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="open navbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="start"
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              disableScrollLock={true}
              open={isDrawerOpen}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{
                sx: { width: "50%" },
              }}
            >
              <List>
                {pages.map((page) => (
                  <ListItem key={page.name}>
                    <ListItemButton
                      component={Link}
                      to={page.path}
                      onClick={handleCloseNavMenu}
                    >
                      {page.name}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}
                      checked={darkMode}
                      onChange={handleThemeToggle}
                    />
                  }
                  label={
                    darkMode ? (
                      <Brightness3Icon
                        sx={{ display: { xs: "flex", md: "none" } }}
                      />
                    ) : (
                      <Brightness7Icon
                        sx={{ display: { xs: "flex", md: "none" } }}
                      />
                    )
                  }
                />
              </FormGroup>
            </Drawer>

            <MemoryIcon
              sx={{ display: { xs: "flex", md: "flex" }, mr: 1, ml: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".15rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CARLSEN.TECH
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    sx={{ display: { xs: "none", md: "flex" } }}
                    checked={darkMode}
                    onChange={handleThemeToggle}
                  />
                }
                label={
                  darkMode ? (
                    <Brightness3Icon
                      sx={{ display: { xs: "none", md: "flex" } }}
                    />
                  ) : (
                    <Brightness7Icon
                      sx={{ display: { xs: "none", md: "flex" } }}
                    />
                  )
                }
              />
            </FormGroup>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavBar;
