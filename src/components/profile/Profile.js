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
import axios from "axios";

const MOCK_USER_DATA = {
    user: {
        netID: "sreeram",
        email: "sbangar2@gmu.edu",
        passwordHash: "qwerty",
        firstName: "sreeram",
        lastName: "Bangaru",
        signUpDate: "2024-02-18T05:48:10.000+00:00",
        status: "active",
    },
    listedProducts: [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description:
                "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            price: 55.99,
            description:
                "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        },
    ],
    productRequests: [
        {
            id: 1,
            title: "iphone 12",
            description: "good condition",
        },
        {
            id: 2,
            title: "monitor",
            description: "24 inch monitor",
        },
    ],
};

function Profile() {
    const profile = new ProfileService();
    const {
        user = {},
        listedProducts = [
            {
                id: 1,
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description:
                    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            },
            {
                id: 2,
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                price: 22.3,
                description:
                    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            },
            {
                id: 3,
                title: "Mens Cotton Jacket",
                price: 55.99,
                description:
                    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            },
        ],
        productRequests = [
            {
                id: 1,
                title: "iphone 12",
                description: "good condition",
            },
            {
                id: 2,
                title: "monitor",
                description: "24 inch monitor",
            },
        ],
    } = MOCK_USER_DATA || JSON.parse(localStorage.getItem("userDetails"));

    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await axios.post(
        //         "https://200c-100-36-180-3.ngrok-free.app/users/login",
        //         {
        //             email: userdetails.email,
        //             passwordHash: password,
        //         },
        //         {
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Access-Control-Allow-Origin": "*",
        //                 Accept: "application/json",
        //             },
        //         }
        //     );
        //     if (response.status === 200) {
        //         console.log(response.data);
        //         const {
        //             user: userdetails,
        //             listedProducts = [],
        //             productRequests = [],
        //         } = reponse.data;
        //         // console.log(users, products, requests);
        //         setUser(userdetails);
        //         setMyProducts(listedProducts);
        //         setMyRequests(productRequests);
        //     } else {
        //         console.error("Login failed: Unexpected response message");
        //     }
        // };
        // fetchData();
    }, []);
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User Profile
            </Typography>
            <UserDetails user={user} />
            <Typography variant="h5" gutterBottom>
                My Listed Products
            </Typography>
            <ListedProducts products={listedProducts} />
            <Typography variant="h5" gutterBottom>
                My Product Requests
            </Typography>
            <ProductRequests requests={productRequests} />
        </Container>
    );
}

function UserDetails({ user }) {
    return (
        <Card sx={{ maxWidth: 1000, marginBottom: 2 }}>
            <CardContent>
                <Avatar
                    sx={{ width: 56, height: 56 }}
                    src="/path-to-profile-picture.jpg"
                />
                <Typography gutterBottom variant="h5" component="div">
                    {user.firstName} {user.lastName}
                </Typography>
                <IconButton aria-label="edit">
                    <EditIcon />
                </IconButton>
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
                                image={product.image}
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
    console.log(requests);
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
                            {/* <Chip label={request.status} color="primary" /> */}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Profile;
