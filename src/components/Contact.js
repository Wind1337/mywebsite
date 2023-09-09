import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import CloseIcon from "@mui/icons-material/Close";

function Contact() {
  React.useEffect(() => {
    document.title = "Carlsen Teo | Contact";
  }, []);

  const [open, setOpen] = React.useState(false);
  const [formKey, setFormKey] = React.useState(Math.random());
  const [recaptchaError, setRecaptchaError] = React.useState(false);

  const recaptchaRef = React.useRef();

  const handleRecaptchaResponse = (value) => {
    setRecaptchaError(false); // reset error state when reCAPTCHA is completed
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (!recaptchaValue) {
    //   setRecaptchaError(true); // set error state if reCAPTCHA is not completed
    //   return;
    // }

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    axios({
      method: "POST",
      url: process.env.REACT_APP_CONTACT_FORM_ENDPOINT,
      data: data,
    })
      .then((response) => {
        setOpen(true);
        setFormKey(Math.random());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography
          sx={{
            mt: 5,
            fontSize: "2.5rem",
          }}
          variant="h1"
        >
          Contact Me
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
        <Box
          component="form"
          key={formKey}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 400,
            mx: "auto",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, mb: 2 }}>
            Email Address
          </Typography>
          <TextField id="email" type="email" name="email" required />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, mb: 2, mt: 3 }}
          >
            What would you like to tell me?
          </Typography>
          <TextField id="message" name="message" multiline rows={4} required />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={handleRecaptchaResponse}
            />
          </Box>

          {recaptchaError && (
            <Typography color="error">
              Please complete the reCAPTCHA.
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontFamily: "Arial", mt: 3 }}
        >
          You may also drop me an email at{" "}
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: "bold" }}
          >
            contact@carlsen.tech
          </Typography>
        </Typography>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Form Submitted!"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Box>
    </Container>
  );
}

export default Contact;
