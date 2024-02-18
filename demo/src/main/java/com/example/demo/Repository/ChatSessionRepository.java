package com.example.demo.Repository;
import com.example.demo.Entity.ChatSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatSessionRepository extends JpaRepository<ChatSession, Integer> {
}
