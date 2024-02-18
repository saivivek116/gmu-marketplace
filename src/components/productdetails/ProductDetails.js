import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button,
    Avatar,
    List,
    ListItem,
    ListItemText,
    Rating,
} from "@mui/material";
import { useEffect } from "react";
import { ProductDetailsService } from "../../services/ProductDetailsService";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function ProductDetailsPage() {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getProductDetails() {
            const response = await ProductDetailsService.getProductDetails(id);
            console.log(response);
            setLoading(false);
            setProduct(response);
        }
        getProductDetails();
    }, []);
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Product Details</Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2} style={{ padding: 20 }}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="300"
                            image={product.image}
                            alt={product.title}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">Seller Information</Typography>
                    {/* <Avatar src={product.seller.image} /> */}
                    <Typography variant="subtitle1">
                        {product?.seller?.name || "john doe"}
                    </Typography>
                    <Button variant="contained" color="primary">
                        Contact Seller
                    </Button>
                    <List>
                        {product?.details?.map((detail) => (
                            <ListItem key={detail.label}>
                                <ListItemText
                                    primary={detail.label}
                                    secondary={detail.value}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductDetailsPage;
