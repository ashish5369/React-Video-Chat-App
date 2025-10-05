import React, { useState, useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';
import '../styles/Chat.css';

const Chat = () => {
  const { messages, sendMessage, name } = useContext(SocketContext);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <h3>Chat</h3>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.userName === name ? 'own-message' : ''}`}>
            <strong>{msg.userName}:</strong> {msg.message}
            <span className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
