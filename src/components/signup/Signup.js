import React, { useState, useEffect } from "react";
import { sha256 } from 'js-sha256';
import axios from "axios";
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
import { useNavigate } from "react-router-dom";

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

// const BASE_URL = "https://200c-100-36-180-3.ngrok-free.app/users/add";
const BASE_URL = "http://localhost:8080/users/add";

// Background image URL
const logoUrl = "/workspaces/gmu-marketplace/assets/gmu-logo.webp"; // Update this path if your image is located elsewhere
export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [netID, setnetID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Define onChange handlers for each field
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlenetIDChange = (e) => setnetID(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      // const hashedPassword = sha256(password);
      const response = await axios.post(BASE_URL, {
        firstName,
        lastName,
        netID,
        email,
        passwordHash: password,
        status: "active" // Assuming this is the format your backend expects
      },{
        headers:{
          "Content-Type":"application/json",
        }
      });
      setLoading(false);
      // Handle successful registration
      // Check if the response status is 200
      if (response.status === 200) {
        // Redirect to the home page
        navigate("/home");  // Update "/home" with the actual path of your home page
      }
      // Redirect to the Discover page or display a success message
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      setError(error.response?.data?.message || "Registration failed.");
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
              <form style={{ width: "100%", marginTop: 3 }} onSubmit={handleSubmit}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                  autoFocus
                />
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
                <TextField
                  value={netID}
                  onChange={(e) => setnetID(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="netID"
                  label="netID"
                  name="netID"
                  autoComplete="net-id"
                />
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={!isEmailValid && email.length > 0}
                  helperText={!isEmailValid && email.length > 0 ? "Email must be a GMU address (ends with @gmu.edu)" : ""}
                />
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  style={{ margin: "24px 0px 16px", backgroundColor: "#FFCC33" }}
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
