package com.example.demo.Controller;
import com.example.demo.Entity.Message;
import com.example.demo.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/messages")
public class MessageController {

    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @PostMapping
    public Message sendMessage(@RequestBody Message message) {
        return messageService.saveMessage(message);
    }

    @GetMapping("/session/{sessionId}")
    public List<Message> getMessagesBySessionId(@PathVariable Integer sessionId) {
        return messageService.findMessagesBySessionId(sessionId);
    }
}
