package com.example.demo.Entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "UserNotifications")
public class UserNotification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserNotificationID")
    private Integer userNotificationId;

    @Column(name = "NetID", length = 10)
    private String netID; // Consider changing to a relationship with the User entity

    @ManyToOne
    @JoinColumn(name = "NotificationID", referencedColumnName = "NotificationID")
    private Notification notification;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DateNotified", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date dateNotified;

    @Column(name = "IsRead", nullable = false)
    private Boolean isRead = false;

    public UserNotification(Integer userNotificationId, String netID, Notification notification, Date dateNotified, Boolean isRead) {
        this.userNotificationId = userNotificationId;
        this.netID = netID;
        this.notification = notification;
        this.dateNotified = dateNotified;
        this.isRead = isRead;
    }

    public Integer getUserNotificationId() {
        return userNotificationId;
    }

    public void setUserNotificationId(Integer userNotificationId) {
        this.userNotificationId = userNotificationId;
    }

    public String getNetID() {
        return netID;
    }

    public void setNetID(String netID) {
        this.netID = netID;
    }

    public Notification getNotification() {
        return notification;
    }

    public void setNotification(Notification notification) {
        this.notification = notification;
    }

    public Date getDateNotified() {
        return dateNotified;
    }

    public void setDateNotified(Date dateNotified) {
        this.dateNotified = dateNotified;
    }

    public Boolean getRead() {
        return isRead;
    }

    public void setRead(Boolean read) {
        isRead = read;
    }
}
