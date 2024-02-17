import React from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Toolbar,
    Typography,
    Box,
    Grid,
    InputBase,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../BaseLayout";

const items = [
    {
        name: "Chair",
        price: "$30",
        image: "/workspaces/gmu-marketplace/assets/chair 1.webp", // replace with your image path
    },
    {
        name: "Swivel Chair",
        price: "$40",
        image: "/workspaces/gmu-marketplace/assets/chair 2.webp", // replace with your image path
    },
    {
        name: "Desktop table",
        price: "$30",
        image: "/workspaces/gmu-marketplace/assets/table 1.webp", // replace with your image path
    },
    {
        name: "Table with storage",
        price: "$40",
        image: "/workspaces/gmu-marketplace/assets/table 2.webp", // replace with your image path
    },
    {
        name: "Monitor with keyboard",
        price: "$30",
        image: "/workspaces/gmu-marketplace/assets/monitor 1.webp", // replace with your image path
    },
    {
        name: "Monitor",
        price: "$40",
        image: "/workspaces/gmu-marketplace/assets/monitor 2.webp", // replace with your image path
    },
    // ... more items
];

const drawerWidth = 240;

const Discover = () => {
    return (
        // <Box
        //     sx={{
        //         display: "flex",
        //         backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/bg-image.webp)`,
        //         minHeight: "100vh",
        //     }}
        // >
        //     <AppBar
        //         position="fixed"
        //         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        //     >
        //         <Toolbar>
        //             <img
        //                 src="/gmu-logo.webp"
        //                 alt="Logo"
        //                 style={{ marginRight: "10px", width: "50px" }}
        //             />

        //             <Typography
        //                 variant="h6"
        //                 noWrap
        //                 component="div"
        //                 sx={{ flexGrow: 1 }}
        //             >
        //                 Discover
        //             </Typography>
        //             <div
        //                 style={{
        //                     display: "flex",
        //                     alignItems: "center",
        //                     width: "50%",
        //                     justifyContent: "center",
        //                 }}
        //             >
        //                 <SearchIcon />
        //                 <InputBase
        //                     placeholder="Search…"
        //                     sx={{ ml: 1, flex: 1 }}
        //                 />
        //             </div>
        //         </Toolbar>
        //     </AppBar>

        //     <Drawer
        //         variant="permanent"
        //         sx={{
        //             width: drawerWidth,
        //             flexShrink: 0,
        //             [`& .MuiDrawer-paper`]: {
        //                 width: drawerWidth,
        //                 boxSizing: "border-box",
        //             },
        //         }}
        //         PaperProps={{
        //             style: {
        //                 width: drawerWidth,
        //                 backgroundColor: theme.palette.secondary.main, // GMU yellow background
        //             },
        //         }}
        //     >
        //         <Toolbar />
        //         <Box sx={{ overflow: "auto" }}>
        //             <List>
        //                 {[
        //                     "Home",
        //                     "Posting",
        //                     "Requests",
        //                     "Messages",
        //                     "Notifications",
        //                     "Profile Page",
        //                 ].map((text) => (
        //                     <ListItem button key={text}>
        //                         <ListItemText primary={text} />
        //                     </ListItem>
        //                 ))}
        //             </List>
        //         </Box>
        //     </Drawer>

        //     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        //         <Toolbar />
        //         <Grid container spacing={2}>
        //             {items.map((item, index) => (
        //                 <Grid item xs={12} sm={6} md={4} key={index}>
        //                     <Card>
        //                         <CardMedia
        //                             component="img"
        //                             height="140"
        //                             image={item.image}
        //                             alt={item.name}
        //                             style={{ objectFit: "contain" }} // Add this line
        //                         />
        //                         <CardContent>
        //                             <Typography
        //                                 gutterBottom
        //                                 variant="h5"
        //                                 component="div"
        //                             >
        //                                 {item.name}
        //                             </Typography>
        //                             <Typography
        //                                 variant="body2"
        //                                 color="text.secondary"
        //                             >
        //                                 {item.price}
        //                             </Typography>
        //                         </CardContent>
        //                     </Card>
        //                 </Grid>
        //             ))}
        //         </Grid>
        //     </Box>
        // </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt={item.name}
                                style={{ objectFit: "contain" }} // Add this line
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Discover;
