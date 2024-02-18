import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import MarkAsReadIcon from "@mui/icons-material/Done";
import { Container } from "@mui/material";

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: "New Message",
            message: "You have received a new message from John.",
            timestamp: "2023-02-17T12:34:56Z",
            read: false,
        },
        {
            id: 101,
            title: "Smartphone",
            message: "A high-end smartphone with advanced features.",
            price: 799.99,
            brand: "XYZ",
            in_stock: true,
            timestamp: "2024-02-18T09:30:00Z",
        },
        {
            id: 102,
            title: "Laptop",
            message: "Thin and light laptop with powerful performance.",
            price: 1299.99,
            brand: "ABC",
            in_stock: false,
            timestamp: "2024-02-18T09:35:00Z",
        },
        {
            id: 103,
            title: "Headphones",
            message: "Wireless headphones with noise-cancellation technology.",
            price: 249.99,
            brand: "DEF",
            in_stock: true,
            timestamp: "2024-02-18T09:40:00Z",
        },
    ]);

    useEffect(() => {
        // Replace this with your actual fetch call
        // const fetchNotifications = async () => {
        //     const response = await fetch("/api/notifications"); // Adjust API endpoint as necessary
        //     const data = await response.json();
        //     setNotifications(data);
        // };
        // fetchNotifications();
    }, []);

    // const handleMarkAsRead = (id) => {
    //     setNotifications(
    //         notifications.map((notification) =>
    //             notification.id === id
    //                 ? { ...notification, read: true }
    //                 : notification
    //         )
    //     );
    // };

    return (
        <Container>
            {notifications.length > 0 ? (
                notifications.map((notification) => (
                    <Notification
                        key={notification.id}
                        notification={notification}
                        // onMarkAsRead={handleMarkAsRead}
                    />
                ))
            ) : (
                <p>No notifications to display.</p>
            )}
        </Container>
    );
};

const Notification = ({ notification }) => (
    <Card
        variant="outlined"
        sx={{
            marginBottom: 2,
            backgroundColor: notification.read ? "#f0f0f0" : "#ffffff",
        }}
    >
        <CardContent>
            <Typography variant="h6">{notification.title}</Typography>
            <Typography color="text.secondary">
                {new Date(notification.timestamp).toLocaleString()}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
                {notification.message}
            </Typography>
            {!notification.read && (
                <IconButton
                    // onClick={() => onMarkAsRead(notification.id)}
                    size="small"
                >
                    <MarkAsReadIcon />
                </IconButton>
            )}
        </CardContent>
    </Card>
);

export default Notifications;
