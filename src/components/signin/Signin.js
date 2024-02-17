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
import { Link as RouterLink } from "react-router-dom";

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

const logoUrl = "../../../assets/marketplace-logo.webp";

export default function Signin() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${logoUrl})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";

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
                            <form style={{ width: "100%", marginTop: 3 }}>
                                <TextField
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
