package com.example.demo.Service;

import com.example.demo.Entity.ChatSession;
import com.example.demo.Repository.ChatSessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatSessionService {

    private final ChatSessionRepository chatSessionRepository;

    @Autowired
    public ChatSessionService(ChatSessionRepository chatSessionRepository) {
        this.chatSessionRepository = chatSessionRepository;
    }

    public ChatSession createChatSession(ChatSession chatSession) {
        return chatSessionRepository.save(chatSession);
    }

}
