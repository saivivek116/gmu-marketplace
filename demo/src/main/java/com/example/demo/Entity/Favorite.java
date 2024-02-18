package com.example.demo.Entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "Favorites")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FavoriteID")
    private Integer favoriteId;

    @Column(name = "NetID")
    private String netID; // Consider changing this to an entity relationship if you have a User entity

    @ManyToOne
    @JoinColumn(name = "ProductID", referencedColumnName = "ProductID")
    private Product product;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "FavoritedOn", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date favoritedOn;

    public Favorite(Integer favoriteId, String netID, Product product, Date favoritedOn) {
        this.favoriteId = favoriteId;
        this.netID = netID;
        this.product = product;
        this.favoritedOn = favoritedOn;
    }

    public Integer getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(Integer favoriteId) {
        this.favoriteId = favoriteId;
    }

    public String getNetID() {
        return netID;
    }

    public void setNetID(String netID) {
        this.netID = netID;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Date getFavoritedOn() {
        return favoritedOn;
    }

    public void setFavoritedOn(Date favoritedOn) {
        this.favoritedOn = favoritedOn;
    }
}
