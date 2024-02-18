import React, { useEffect } from "react";

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
import chair from "../../../public/assets/chair2.webp";
import chair2 from "../../../public/assets/chair2.webp";
import table1 from "../../../public/assets/table 1.webp";
import table2 from "../../../public/assets/table 2.webp";
import monitor1 from "../../../public/assets/monitor 1.webp";
import monitor2 from "../../../public/assets/monitor 2.webp";
import { useNavigate } from "react-router-dom";

const items = [
    {
        name: "Chair",
        price: "$30",
        image: chair, // replace with your image path
    },
    {
        name: "Swivel Chair",
        price: "$40",
        image: chair2, // replace with your image path
    },
    {
        name: "Desktop table",
        price: "$30",
        image: table1, // replace with your image path
    },
    {
        name: "Table with storage",
        price: "$40",
        image: table2, // replace with your image path
    },
    {
        name: "Monitor with keyboard",
        price: "$30",
        image: monitor1, // replace with your image path
    },
    {
        name: "Monitor",
        price: "$40",
        image: monitor2, // replace with your image path
    },
];

const drawerWidth = 240;

const Discover = () => {
    const navigate = useNavigate();
    const [products, setProducts] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        async function getProducts() {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setLoading(false);
            setProducts(data);
        }
        getProducts();
    }, []);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Grid container spacing={2}>
                {products.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card
                            onClick={() => {
                                navigate(`/product/${index}`);
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.image}
                                alt={item.title}
                                style={{ objectFit: "contain" }} // Add this line
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {`${item.price}$`}
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
