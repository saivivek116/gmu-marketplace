package com.example.demo.Controller;
import com.example.demo.Entity.UserNotification;
import com.example.demo.Service.UserNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/user-notifications")
public class UserNotificationController {

    private final UserNotificationService userNotificationService;

    @Autowired
    public UserNotificationController(UserNotificationService userNotificationService) {
        this.userNotificationService = userNotificationService;
    }

    @PostMapping
    public UserNotification addUserNotification(@RequestBody UserNotification userNotification) {
        return userNotificationService.addUserNotification(userNotification);
    }

    @GetMapping
    public List<UserNotification> getAllUserNotifications() {
        return userNotificationService.getAllUserNotifications();
    }
}
