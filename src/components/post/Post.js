import React, { useState } from "react";
import {
    TextField,
    MenuItem,
    Button,
    Typography,
    Box,
    Container,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../BaseLayout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import toast from "react-hot-toast";
const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Furniture", value: "furniture" },
    // Add more categories as needed
];

function Post() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [photos, setPhotos] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic here
        setTitle("");
        setPrice("");
        setDescription("");
        setPhotos([]);
        toast.success("Successfully Posted!");

        //notify user of successful post using react hot toast
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImagePreviews = [];
        files.forEach((file) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                newImagePreviews.push(reader.result);
                // Update state only after all files are processed
                if (newImagePreviews.length === files.length) {
                    setPhotos((prev) => [...prev, ...newImagePreviews]);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Product Details
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
                            onChange={handleImageChange}
                        />
                    </Button>

                    <Box sx={{ overflowX: "auto" }}>
                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            {photos.map((imagePreview, index) => (
                                <ListItem
                                    key={index}
                                    sx={{ width: "auto", paddingRight: 2 }}
                                >
                                    <img
                                        src={imagePreview}
                                        alt={`Preview ${index}`}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "4px",
                                        }} // Added borderRadius for a bit of styling
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                        >
                            Sell
                        </Button>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Post;
