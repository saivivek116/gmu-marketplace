import React, { useState } from "react";
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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#006633", // GMU green
    },
    secondary: {
      main: "#FFCC33", // GMU yellow
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.65)", // Semi-transparent white background for the text field
          borderRadius: 4, // Rounded corners for the text field
        },
      },
    },
  },
});

// Background image URL
const logoUrl = "/workspaces/gmu-marketplace/assets/gmu-logo.webp"; // Update this path if your image is located elsewhere

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to your backend with email and password
      const response = await axios.post("http://localhost:8080/users/login", {
        email,
        passwordHash: password,
      });

      console.log("Login successful", response.data);

      console.log(response.status, "status");
        if (response.status === 200) {
          // Redirect to the home page
          localStorage.setItem("token","123");
          navigate("/home");
      } else {
          // Handle other messages or errors accordingly
          console.error("Login failed: Unexpected response message");
          // Optionally, update the state or UI to inform the user
      }    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error);
      // You can update the state or display an error message to the user
    }
  };

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
                backgroundColor: "rgba(255, 255, 255, 0.9)",
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
                Log in
              </Typography>
              <form style={{ width: "100%", marginTop: 3 }} onSubmit={handleSubmit}>
                <TextField
                  value={email}
                  onChange={handleEmailChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  value={password}
                  onChange={handlePasswordChange}
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
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  style={{
                    margin: "24px 0px 16px",
                    backgroundColor: "#FFCC33",
                  }}
                >

                  Log In
                </Button>
                <Link
                  component={RouterLink}
                  to="../signup"
                  variant="body2"
                  style={{ color: "#006633" }}
                >
                  {"Don't have an account? Sign up"}
                </Link>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
