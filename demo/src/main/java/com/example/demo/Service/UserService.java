package com.example.demo.Service;

import com.example.demo.Entity.Product;
import com.example.demo.Entity.ProductRequest;
import com.example.demo.Entity.Users;
import com.example.demo.Repository.ProductRepository;
import com.example.demo.Repository.ProductRequestRepository;
import com.example.demo.Repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Date;
import java.util.*;

@Service
public class UserService {


    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final ProductRequestRepository productRequestRepository;

    @Autowired
    public UserService(UserRepository userRepository, ProductRepository productRepository, ProductRequestRepository productRequestRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.productRequestRepository = productRequestRepository;
    }
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    // Method to add a new user
    public Users addUser(Users user) {
        Users newUser = user;
        newUser.setSignUpDate(new Date());
        if (userRepository.existsById(newUser.getNetID())) {
            throw new EntityExistsException("User with ID " + newUser.getNetID() + " already exists.");
        }
        return userRepository.save(newUser); // Save the new user to the database
    }

    public boolean authenticateUser(String email, String password) {

        Users user = userRepository.findByEmail(email);
        logger.info(user.getPasswordHash());
        logger.info(password);
        return user != null && user.getPasswordHash().equals(password);
    }

    public UserProfileDetails getUserProfileDetails(String email) {
        Users user = userRepository.findByEmail(email);
        logger.info(user.toString());
        String netID = "";
        if(user != null){
            netID = user.getNetID();
        }
        List<Product> products = productRepository.findByNetID(netID);
        //logger.info(products.toString());
        List<ProductRequest> requests = productRequestRepository.findByNetID(netID);
        //logger.info(requests.toString());

        return new UserProfileDetails(user, products, requests);
    }

    public static class UserProfileDetails {
        private Users user;
        private List<Product> listedProducts;
        private List<ProductRequest> productRequests;

        public Users getUser() {
            return user;
        }

        public void setUser(Users user) {
            this.user = user;
        }

        public List<Product> getListedProducts() {
            return listedProducts;
        }

        public void setListedProducts(List<Product> listedProducts) {
            this.listedProducts = listedProducts;
        }

        public List<ProductRequest> getProductRequests() {
            return productRequests;
        }

        public void setProductRequests(List<ProductRequest> productRequests) {
            this.productRequests = productRequests;
        }

        public UserProfileDetails(Users user, List<Product> listedProducts, List<ProductRequest> productRequests) {
            this.user = user;
            this.listedProducts = listedProducts;
            this.productRequests = productRequests;
        }
}}

