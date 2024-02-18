package com.example.demo.Controller;

import com.example.demo.Entity.Users;
import com.example.demo.Service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public Users addUser(@RequestBody Users user) {
        return userService.addUser(user);

    }

    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> loginUser(@RequestBody Users auth_user) {
        boolean isAuthenticated = userService.authenticateUser(auth_user.getEmail(), auth_user.getPasswordHash());
        if (isAuthenticated) {
            UserService.UserProfileDetails userProfileDetails = userService.getUserProfileDetails(auth_user.getEmail());
            return ResponseEntity.ok(userProfileDetails);
        } else {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Invalid credentials");
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(errorResponse); // Ensure consistent response type
        }
    }
}

