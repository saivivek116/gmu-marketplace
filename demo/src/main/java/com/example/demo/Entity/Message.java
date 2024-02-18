package com.example.demo.Entity;
import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "Messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MessageID")
    private Integer messageId;

    @ManyToOne
    @JoinColumn(name = "SessionID", referencedColumnName = "SessionID")
    private ChatSession chatSession;

    @Column(name = "SenderUserID", length = 10)
    private String senderUserID;

    @Column(name = "MessageText", columnDefinition = "TEXT")
    private String messageText;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "SentDateTime", nullable = false, columnDefinition = "DATETIME DEFAULT CURRENT_TIMESTAMP")
    private Date sentDateTime;

    public Message(Integer messageId, ChatSession chatSession, String senderUserID, String messageText, Date sentDateTime) {
        this.messageId = messageId;
        this.chatSession = chatSession;
        this.senderUserID = senderUserID;
        this.messageText = messageText;
        this.sentDateTime = sentDateTime;
    }

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public ChatSession getChatSession() {
        return chatSession;
    }

    public void setChatSession(ChatSession chatSession) {
        this.chatSession = chatSession;
    }

    public String getSenderUserID() {
        return senderUserID;
    }

    public void setSenderUserID(String senderUserID) {
        this.senderUserID = senderUserID;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Date getSentDateTime() {
        return sentDateTime;
    }

    public void setSentDateTime(Date sentDateTime) {
        this.sentDateTime = sentDateTime;
    }
}
