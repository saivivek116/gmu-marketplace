package com.example.demo.Service;
import com.example.demo.Entity.UserNotification;
import com.example.demo.Repository.UserNotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserNotificationService {

    private final UserNotificationRepository userNotificationRepository;

    @Autowired
    public UserNotificationService(UserNotificationRepository userNotificationRepository) {
        this.userNotificationRepository = userNotificationRepository;
    }

    public UserNotification addUserNotification(UserNotification userNotification) {
        return userNotificationRepository.save(userNotification);
    }

    public List<UserNotification> getAllUserNotifications() {
        return userNotificationRepository.findAll();
    }

}
