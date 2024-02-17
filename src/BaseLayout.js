// In BaseLayout.js
import React from "react";
import {
    AppBar,
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
    const activePage = menuItems.find(
        (item) => location.pathname === item.path
    )?.text;

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
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            {activePage || "Web App"}
                        </Typography>
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
