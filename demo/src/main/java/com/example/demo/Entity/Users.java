package com.example.demo.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "users")
public class Users {

    @Id
    @Column(name = "NetID", length = 10)
    private String netID;

    @Column(name = "Email", nullable = false, unique = true, length = 255)
    private String email;

    @Column(name = "PasswordHash", length = 255)
    private String passwordHash;

    @Column(name = "FirstName", length = 100)
    private String firstName;

    @Column(name = "LastName", length = 100)
    private String lastName;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "SignUpDate", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date signUpDate;

    @Column(name = "Status", length = 8)
    private String status;

    public Users() {
    }

    public Users(String netID, String email, String passwordHash, String firstName, String lastName, Date signUpDate, String status) {
        this.netID = netID;
        this.email = email;
        this.passwordHash = passwordHash;
        this.firstName = firstName;
        this.lastName = lastName;
        this.signUpDate = signUpDate;
        this.status = status;
    }

    public String getNetID() {
        return netID;
    }

    public void setNetID(String netID) {
        this.netID = netID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getSignUpDate() {
        return signUpDate;
    }

    public void setSignUpDate(Date signUpDate) {
        this.signUpDate = signUpDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
