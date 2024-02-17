import React, { useEffect } from "react";
import {
  Button,
  TextField,
  Link,
  Paper,
  Typography,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#006633",
    },
    secondary: {
      main: "#FFCC33",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 4,
        },
      },
    },
  },
});

// Background image URL
const logoUrl = "/workspaces/gmu-marketplace/assets/gmu-logo.webp"; // Update this path if your image is located elsewhere

export default function Signup() {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = email.endsWith("@gmu.edu");

  useEffect(() => {
    // Set the background image for the entire page
    document.body.style.backgroundImage = `url(${logoUrl})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";

    // Clean up the background style when the component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={18} sm={12} md={8}>
            <Paper
              elevation={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 20,
                backgroundColor: "rgba(255, 255, 255, 0.85)",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#006633",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Sign up
              </Typography>
              <form style={{ width: "100%", marginTop: 3 }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={!isEmailValid && email.length > 0}
                  helperText={
                    !isEmailValid && email.length > 0
                      ? "Email must be a GMU address (ends with @gmu.edu)"
                      : ""
                  }
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                />
                {/* Include Captcha or Security Check here if needed */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  style={{
                    margin: "24px 0px 16px",
                    backgroundColor: "#FFCC33",
                  }}
                  disabled={!isEmailValid}
                >
                  Sign Up
                </Button>
                <Link
                  href="./signin"
                  variant="body2"
                  style={{ color: "#006633" }}
                >
                  {"Already have an account? Log in"}
                </Link>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
