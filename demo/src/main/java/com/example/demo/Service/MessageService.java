package com.example.demo.Service;

import com.example.demo.Entity.Message;
import com.example.demo.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class MessageService {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> findMessagesBySessionId(Integer sessionId) {
        // Implement logic to find messages by sessionId
        // This might require custom method in the repository
        return null;
    }
}
