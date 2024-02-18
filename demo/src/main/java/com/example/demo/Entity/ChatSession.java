package com.example.demo.Entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "ChatSessions")
public class ChatSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SessionID")
    private Integer sessionId;

    @ManyToOne
    @JoinColumn(name = "ProductID", referencedColumnName = "ProductID")
    private Product product;

    @Column(name = "BuyerUserID", length = 10)
    private String buyerUserID;

    @Column(name = "SellerUserID", length = 10)
    private String sellerUserID;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "StartDateTime", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date startDateTime;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "LastMessageDateTime")
    private Date lastMessageDateTime;

    public ChatSession(Integer sessionId, Product product, String buyerUserID, String sellerUserID, Date startDateTime, Date lastMessageDateTime) {
        this.sessionId = sessionId;
        this.product = product;
        this.buyerUserID = buyerUserID;
        this.sellerUserID = sellerUserID;
        this.startDateTime = startDateTime;
        this.lastMessageDateTime = lastMessageDateTime;
    }

    public Integer getSessionId() {
        return sessionId;
    }

    public void setSessionId(Integer sessionId) {
        this.sessionId = sessionId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getBuyerUserID() {
        return buyerUserID;
    }

    public void setBuyerUserID(String buyerUserID) {
        this.buyerUserID = buyerUserID;
    }

    public String getSellerUserID() {
        return sellerUserID;
    }

    public void setSellerUserID(String sellerUserID) {
        this.sellerUserID = sellerUserID;
    }

    public Date getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(Date startDateTime) {
        this.startDateTime = startDateTime;
    }

    public Date getLastMessageDateTime() {
        return lastMessageDateTime;
    }

    public void setLastMessageDateTime(Date lastMessageDateTime) {
        this.lastMessageDateTime = lastMessageDateTime;
    }
}
