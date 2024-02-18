import React, { useState } from "react";
import {
    Container,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Messages = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState([]);

    // Dummy data for representational purposes
    const conversations = [
        {
            id: 1,
            name: "John Doe",
            messages: [
                { id: 1, sender: "John Doe", content: "Hi there!" },
                { id: 2, sender: "You", content: "Hello, John!" },
            ],
        },
        {
            id: 2,
            name: "Jane Smith",
            messages: [
                { id: 1, sender: "Jane Smith", content: "Hey!" },
                { id: 2, sender: "You", content: "Hi, Jane!" },
            ],
        },
        {
            id: 3,
            name: "Alice Johnson",
            messages: [
                { id: 1, sender: "You", content: "Hey Alice!" },
                { id: 2, sender: "Alice Johnson", content: "Hello!" },
            ],
        },
        {
            id: 4,
            name: "Bob Brown",
            messages: [
                { id: 1, sender: "You", content: "Hi Bob!" },
                { id: 2, sender: "Bob Brown", content: "Hi, how are you?" },
            ],
        },
    ];

    const handleMessageSend = () => {
        // Handle sending message logic here
        const newMessage = {
            sender: "You",
            content: messageInput,
        };
        setMessages([...messages, newMessage]);
        setMessageInput("");
    };

    return (
        <Container style={{ flexGrow: 1, marginTop: "2rem" }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper
                        style={{
                            backgroundColor: "#eeeeee",
                            borderRight: "1px solid #ccc",
                            height: "80vh",
                            overflow: "auto",
                            padding: "1rem",
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            User List
                        </Typography>
                        <List>
                            {conversations.map((conversation) => (
                                <ListItem
                                    key={conversation.id}
                                    button
                                    selected={
                                        selectedConversation === conversation.id
                                    }
                                    onClick={() =>
                                        setSelectedConversation(conversation.id)
                                    }
                                >
                                    <ListItemText primary={conversation.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper
                        style={{
                            padding: "1rem",
                            height: "80vh",
                            overflow: "auto",
                            position: "relative",
                        }}
                    >
                        {selectedConversation ? (
                            <>
                                <Typography variant="h5">
                                    Chat with{" "}
                                    {
                                        conversations.find(
                                            (convo) =>
                                                convo.id ===
                                                selectedConversation
                                        ).name
                                    }
                                </Typography>
                                {/* Chat window */}
                                <div
                                    style={{
                                        marginTop: "1em",
                                        marginBottom: "3rem",
                                    }}
                                >
                                    {conversations
                                        .find(
                                            (convo) =>
                                                convo.id ===
                                                selectedConversation
                                        )
                                        .messages.map((message) => (
                                            <div
                                                key={message.id}
                                                style={{
                                                    marginBottom: "0.5em",
                                                    backgroundColor:
                                                        message.sender === "You"
                                                            ? "#DCF8C6"
                                                            : "#E0E0E0",
                                                    padding: "0.5rem",
                                                    borderRadius: "8px",
                                                    textAlign:
                                                        message.sender === "You"
                                                            ? "right"
                                                            : "left",
                                                }}
                                            >
                                                <Typography
                                                    variant="subtitle1"
                                                    style={{
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {message.sender}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {message.content}
                                                </Typography>
                                            </div>
                                        ))}
                                </div>
                                {/* Message input */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "calc(100% - 48px)",
                                    }}
                                >
                                    <TextField
                                        variant="outlined"
                                        placeholder="Type your message..."
                                        fullWidth
                                        value={messageInput}
                                        onChange={(e) =>
                                            setMessageInput(e.target.value)
                                        }
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleMessageSend}
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            top: 0,
                                        }}
                                    >
                                        <SendIcon />
                                    </Button>{" "}
                                </div>
                            </>
                        ) : (
                            <Typography variant="h5">
                                Select a conversation to start chatting
                            </Typography>
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Messages;
