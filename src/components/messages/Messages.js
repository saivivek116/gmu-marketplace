import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function Messages() {
    return (
        <Box sx={{ flexGrow: 1, overflow: "hidden", p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <SidebarChat />
                </Grid>
                <Grid item xs={12} md={8}>
                    <ChatArea />
                </Grid>
            </Grid>
        </Box>
    );
}

const SidebarChat = () => {
    const users = [
        {
            name: "John Doe",
            image: "https://via.placeholder.com/150",
        },
        {},
    ];
    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
            {users.map((user, index) => (
                <ListItem button key={index}>
                    <Avatar alt={user.name} src={user.avatar} />
                    <ListItemText primary={user.name} />
                </ListItem>
            ))}
        </List>
    );
};

const ChatArea = () => {
    const [messages, setMessages] = React.useState([
        {
            id: 1,
            sender: "John Doe",
            text: "Hello",
            receiver: "vivek",
        },
        {
            id: 2,
            sender: "vivek",
            text: "Hello",
            receiver: "Jane Doe",
        },
    ]);
    const [message, setMessage] = React.useState("");
    const currentUser = "John Doe";
    const sendMessage = () => {
        console.log(message);
        setMessage("");
    };
    return (
        <Box sx={{ p: 2 }}>
            <Box
                sx={{
                    my: 2,
                    p: 2,
                    border: "1px solid #e0e0e0",
                    height: "70vh",
                    overflowY: "auto",
                }}
            >
                {
                    //based on the sender and receiver, we should change the alignment
                    messages.map((message) => (
                        <Box
                            key={message.id}
                            sx={{
                                display: "flex",
                                justifyContent:
                                    message.sender === currentUser
                                        ? "flex-end"
                                        : "flex-start",
                            }}
                        >
                            <Box
                                sx={{
                                    p: 1,
                                    bgcolor:
                                        message.sender === currentUser
                                            ? "primary.main"
                                            : "secondary.main",
                                    color: "white",
                                    borderRadius: "10px",
                                }}
                            >
                                {message.text}
                            </Box>
                        </Box>
                    ))
                }
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                    fullWidth
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={sendMessage}
                    sx={{ ml: 1 }}
                >
                    <SendIcon />
                </Button>
            </Box>
        </Box>
    );
};

export default Messages;
