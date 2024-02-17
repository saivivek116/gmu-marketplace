import React, { useEffect } from "react";
import { useState } from "react";
import { ProfileService } from "../../services/ProfileService";
import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import { Card, CardContent, Avatar, Typography, Button } from "@mui/material";
import { theme } from "../home/Discover";
import { Grid } from "@mui/material";
import {
    CardActionArea,
    CardMedia,
    CardActions,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Chip } from "@mui/material";

function Profile() {
    const [user, setUser] = useState({});
    const profile = new ProfileService();
    const [myProducts, setMyProducts] = useState([]);
    const [myRequests, setMyRequests] = useState([]);
    useEffect(() => {
        // Fetch user profile and set the state using ProfileService
        // profile.getProfile().then((data) => {
        //     setUser(data);
        // });
        // profile.getProducts().then((data) => {
        //     setMyProducts(data);
        // });
        // profile.getRequests().then((data) => {
        //     setMyRequests(data);
        // });
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    User Profile
                </Typography>
                <UserDetails />
                <Typography variant="h5" gutterBottom>
                    My Listed Products
                </Typography>
                <ListedProducts products={myProducts} />
                <Typography variant="h5" gutterBottom>
                    My Product Requests
                </Typography>
                <ProductRequests requests={myRequests} />
            </Container>
        </ThemeProvider>
    );
}

function UserDetails() {
    return (
        <Card sx={{ maxWidth: 1000, marginBottom: 2 }}>
            <CardContent>
                <Avatar
                    sx={{ width: 56, height: 56 }}
                    src="/path-to-profile-picture.jpg"
                />
                <Typography gutterBottom variant="h5" component="div">
                    User Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    User bio or description can go here.
                </Typography>
                <Button variant="outlined">Edit Profile</Button>
            </CardContent>
        </Card>
    );
}

function ListedProducts({ products }) {
    if (products.length === 0) {
        return (
            <Typography variant="body2" color="text.secondary">
                No products listed yet.
            </Typography>
        );
    }
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.imageUrl}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {product.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <IconButton aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

function ProductRequests({ requests }) {
    if (requests.length === 0) {
        return (
            <Typography variant="body2" color="text.secondary">
                No requests made yet.
            </Typography>
        );
    }
    return (
        <Grid container spacing={2}>
            {requests.map((request) => (
                <Grid item xs={12} sm={6} md={4} key={request.id}>
                    <Card>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {request.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {request.description}
                            </Typography>
                            <Chip label={request.status} color="primary" />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Profile;
