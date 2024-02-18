package com.example.demo.Entity;
import java.math.BigDecimal;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "Products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProductID")
    private Integer productId;

    @Column(name = "ProductName", nullable = false, length = 255)
    private String productName;

    @Column(name = "Price", nullable = false)
    private BigDecimal price;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "ListedAgo", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date listedAgo;

    @Column(name = "ListedAddress", nullable = false, length = 255)
    private String listedAddress;

    @Column(name = "NetID", length = 10)
    private String netID;

    @Column(name = "TimeFrame")
    private Integer timeFrame;

    @Column(name = "CategoryID")
    private int category;

    @Column(name = "ProductDescription", columnDefinition = "TEXT")
    private String productDescription;

    @Column(name = "PhotoURL", length = 255)
    private String photoURL;

    @Column(name = "VideoURL", length = 255)
    private String videoURL;

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Date getListedAgo() {
        return listedAgo;
    }

    public void setListedAgo(Date listedAgo) {
        this.listedAgo = listedAgo;
    }

    public String getListedAddress() {
        return listedAddress;
    }

    public void setListedAddress(String listedAddress) {
        this.listedAddress = listedAddress;
    }

    public String getNetID() {
        return netID;
    }

    public void setNetID(String netID) {
        this.netID = netID;
    }

    public Integer getTimeFrame() {
        return timeFrame;
    }

    public void setTimeFrame(Integer timeFrame) {
        this.timeFrame = timeFrame;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getPhotoURL() {
        return photoURL;
    }

    public void setPhotoURL(String photoURL) {
        this.photoURL = photoURL;
    }

    public String getVideoURL() {
        return videoURL;
    }

    public void setVideoURL(String videoURL) {
        this.videoURL = videoURL;
    }
}
