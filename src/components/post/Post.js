import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    Button,
    Typography,
    Box,
    Container
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../BaseLayout";
const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Furniture", value: "furniture" },
    // Add more categories as needed
];

function Post() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic here
        console.log({ title, price, category, description });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Post New Listing
                </Typography>
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
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        margin="normal"
                        type="number"
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
                    <TextField
                        fullWidth
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button
                        variant="contained"
                        component="label"
                        sx={{ mt: 2 }}
                    >
                        Upload Photos
                        <input
                            type="file"
                            hidden
                            multiple
                            // onChange={...} // Add onChange handler for file input
                        />
                    </Button>
                    <div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                    >
                        Post Listing
                    </Button>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Post;
