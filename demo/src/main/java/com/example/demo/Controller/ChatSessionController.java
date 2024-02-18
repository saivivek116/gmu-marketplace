package com.example.demo.Controller;
import com.example.demo.Entity.ChatSession;
import com.example.demo.Service.ChatSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/chat-sessions")
public class ChatSessionController {

    private final ChatSessionService chatSessionService;

    @Autowired
    public ChatSessionController(ChatSessionService chatSessionService) {
        this.chatSessionService = chatSessionService;
    }

    @PostMapping
    public ChatSession createChatSession(@RequestBody ChatSession chatSession) {
        return chatSessionService.createChatSession(chatSession);
    }
}
