--Create Database market

create database market

use market


--Users table data. Used for Sign Up, Login and Profile
CREATE TABLE Users (
    NetID  VARCHAR(10) PRIMARY KEY,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PasswordHash VARCHAR(100),
    FirstName VARCHAR(100),
    LastName VARCHAR(100),
    SignUpDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    Status VARCHAR(8)
);


--Categories table contains all the different categories the products fall under
CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(255) NOT NULL
);

--Products table consists of all the data of each product that has been added by a user in the marketplace
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    ListedAgo DATETIME DEFAULT CURRENT_TIMESTAMP,
    ListedAddress VARCHAR(255) NOT NULL,
    NetID VARCHAR(10),
    TimeFrame INT,
    CategoryID INT,
    ProductDescription TEXT,
	PhotoURL VARCHAR(255),
    VideoURL VARCHAR(255),
    FOREIGN KEY (NetID) REFERENCES Users(NetID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

--ProductRequests Table is used for storiing thhe request data of the buyer who wants a particular product

CREATE TABLE ProductRequests (
    RequestID INT AUTO_INCREMENT PRIMARY KEY,
    NetID VARCHAR(10),
    ProductName VARCHAR(255) NOT NULL,
    CategoryID INT,
    MinPrice DECIMAL(10, 2),
    MaxPrice DECIMAL(10, 2),
    LocationRadius INT,
    DateRequested DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (NetID) REFERENCES Users(NetID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

--Notifications table stores the data of the notification being sent to the Users

CREATE TABLE Notifications (
    NotificationID INT AUTO_INCREMENT PRIMARY KEY,
    RequestID INT,
    NetID VARCHAR(10),
    ProductName VARCHAR(255), -- The name of the product that triggered the notification
    NotificationMessage TEXT,
    DateNotified DATETIME DEFAULT CURRENT_TIMESTAMP,
    IsRead BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (RequestID) REFERENCES ProductRequests(RequestID),
    FOREIGN KEY (NetID) REFERENCES Users(NetID)
);

-- UserNotification table is used to connect User and notification table

CREATE TABLE UserNotifications (
    UserNotificationID INT AUTO_INCREMENT PRIMARY KEY,
    NetID VARCHAR(10),
    NotificationID INT,
    DateNotified DATETIME DEFAULT CURRENT_TIMESTAMP,
    IsRead BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (NetID) REFERENCES Users(NetID),
    FOREIGN KEY (NotificationID) REFERENCES Notifications(NotificationID)
);


--ChatSessions table stores the data of the chats that happended in a particular SESSION

CREATE TABLE ChatSessions (
    SessionID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    BuyerUserID VARCHAR(10),
    SellerUserID VARCHAR(10),
    StartDateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    LastMessageDateTime DATETIME,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (BuyerUserID) REFERENCES Users(NetID),
    FOREIGN KEY (SellerUserID) REFERENCES Users(NetID)
);

--Messages table is used to store the data of the messages that are being sent by the users to each other in the chatting INTERFACE

CREATE TABLE Messages (
    MessageID INT AUTO_INCREMENT PRIMARY KEY,
    SessionID INT,
    SenderUserID VARCHAR(10),
    MessageText TEXT,
    SentDateTime DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SessionID) REFERENCES ChatSessions(SessionID),
    FOREIGN KEY (SenderUserID) REFERENCES Users(NetID)
);



--Favourites table is used to store the data of the  products marked by the buyer/Seller

CREATE TABLE Favorites (
    FavoriteID INT AUTO_INCREMENT PRIMARY KEY,
    NetID VARCHAR(10),
    ProductID INT,
    FavoritedOn DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (NetID) REFERENCES Users(NetID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
