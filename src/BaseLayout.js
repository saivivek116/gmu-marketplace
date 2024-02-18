// In BaseLayout.js
import React from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    createTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    ThemeProvider,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../public/assets/gmu-logo.webp";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const menuItems = [
    { text: "Home", path: "/home" },
    { text: "Post", path: "/post" },
    { text: "Request", path: "/request" },
    { text: "Messages", path: "/messages" },
    { text: "Notifications", path: "/notifications" },
    { text: "Profile", path: "/profile" },
];

export const theme = createTheme({
    palette: {
        primary: {
            main: "#006633", // GMU green
        },
        secondary: {
            main: "#FFCC33", // GMU yellow
        },
    },
});

export default function BaseLayout({ children }) {
    const location = useLocation();
    let navigate = useNavigate();
    const activePage = menuItems.find(
        (item) => location.pathname === item.path
    )?.text;
    if (["/signin", "/signup", "/"].indexOf(location?.pathname) > -1) {
        console.log(location.pathname);
        return <>{children}</>;
    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userDetails");
        navigate("/signin");
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                {/* AppBar and Toolbar here, including active page title */}
                <AppBar
                    position="fixed"
                    sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                >
                    <Toolbar>
                        {/* Other AppBar content */}
                        <img
                            src={logo} // Replace with your logo path
                            alt="Logo"
                            style={{
                                marginRight: "10px",
                                width: "50px",
                                height: "auto",
                            }} // Adjust size as needed
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {activePage || "Web App"}
                        </Typography>

                        <Button color="secondary" onClick={logout}>
                            Sign Out
                        </Button>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "auto" }}>
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem
                                    button
                                    key={item.text}
                                    component={Link}
                                    to={item.path}
                                    selected={location.pathname === item.path}
                                    // sx={{
                                    //     textDecoration: "none",
                                    //     color: "inherit",
                                    // }}
                                >
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
