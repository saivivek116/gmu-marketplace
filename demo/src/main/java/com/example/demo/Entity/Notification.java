package com.example.demo.Entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "Notifications")
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NotificationID")
    private Integer notificationId;

    @ManyToOne
    @JoinColumn(name = "RequestID", referencedColumnName = "RequestID")
    private ProductRequest productRequest;

    @Column(name = "NetID", length = 10)
    private String netID; // Consider changing to a relationship with User entity if defined

    @Column(name = "ProductName", length = 255)
    private String productName;

    @Column(name = "NotificationMessage", columnDefinition = "TEXT")
    private String notificationMessage;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DateNotified", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date dateNotified;

    @Column(name = "IsRead")
    private Boolean isRead = false;

    public Notification(Integer notificationId, ProductRequest productRequest, String netID, String productName, String notificationMessage, Date dateNotified, Boolean isRead) {
        this.notificationId = notificationId;
        this.productRequest = productRequest;
        this.netID = netID;
        this.productName = productName;
        this.notificationMessage = notificationMessage;
        this.dateNotified = dateNotified;
        this.isRead = isRead;
    }

    public Integer getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(Integer notificationId) {
        this.notificationId = notificationId;
    }

    public ProductRequest getProductRequest() {
        return productRequest;
    }

    public void setProductRequest(ProductRequest productRequest) {
        this.productRequest = productRequest;
    }

    public String getNetID() {
        return netID;
    }

    public void setNetID(String netID) {
        this.netID = netID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getNotificationMessage() {
        return notificationMessage;
    }

    public void setNotificationMessage(String notificationMessage) {
        this.notificationMessage = notificationMessage;
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
