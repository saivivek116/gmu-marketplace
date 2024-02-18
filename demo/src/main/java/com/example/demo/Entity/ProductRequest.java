package com.example.demo.Entity;
import java.math.BigDecimal;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "ProductRequests")
public class ProductRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RequestID")
    private Integer requestId;

    @Column(name = "NetID")
    private String netID;

    @Column(name = "ProductName", nullable = false, length = 255)
    private String productName;

    @Column(name = "CategoryID")
    private int category;

    @Column(name = "MinPrice", precision = 10, scale = 2)
    private BigDecimal minPrice;

    @Column(name = "MaxPrice", precision = 10, scale = 2)
    private BigDecimal maxPrice;

    @Column(name = "LocationRadius")
    private Integer locationRadius;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "DateRequested", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date dateRequested;

    public ProductRequest(Integer requestId, String netID, String productName, int category, BigDecimal minPrice, BigDecimal maxPrice, Integer locationRadius, Date dateRequested) {
        this.requestId = requestId;
        this.netID = netID;
        this.productName = productName;
        this.category = category;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.locationRadius = locationRadius;
        this.dateRequested = dateRequested;
    }

    public Integer getRequestId() {
        return requestId;
    }

    public void setRequestId(Integer requestId) {
        this.requestId = requestId;
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

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public BigDecimal getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(BigDecimal minPrice) {
        this.minPrice = minPrice;
    }

    public BigDecimal getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(BigDecimal maxPrice) {
        this.maxPrice = maxPrice;
    }

    public Integer getLocationRadius() {
        return locationRadius;
    }

    public void setLocationRadius(Integer locationRadius) {
        this.locationRadius = locationRadius;
    }

    public Date getDateRequested() {
        return dateRequested;
    }

    public void setDateRequested(Date dateRequested) {
        this.dateRequested = dateRequested;
    }
}
