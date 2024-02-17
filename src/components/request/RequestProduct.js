import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    Button,
    Slider,
    Typography,
    Box,
    Container,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../home/Discover";

const categories = [
    { label: "Category 1", value: "category1" },
    { label: "Category 2", value: "category2" },
    // Add more categories as needed
];

function RequestProduct() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([20, 40]);
    const [locationRadius, setLocationRadius] = useState(30);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ title, category, priceRange, locationRadius });
    };

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleRadiusChange = (event, newValue) => {
        setLocationRadius(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <h2>Request a Product</h2>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        fullWidth
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        select
                        label="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        margin="normal"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Typography gutterBottom>Price Range</Typography>
                    <Slider
                        value={priceRange}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={1000}
                    />
                    <Typography gutterBottom>Location Radius (km)</Typography>
                    <Slider
                        value={locationRadius}
                        onChange={handleRadiusChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={100}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3 }}
                        color="primary"
                    >
                        Request
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default RequestProduct;
