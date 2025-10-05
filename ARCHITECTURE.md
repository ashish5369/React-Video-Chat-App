# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         MERN Stack Video Chat App               │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐         ┌──────────────────────┐
│   Client (React)     │         │   Server (Node.js)   │
│   Port: 3000         │◄────────┤   Port: 5000         │
└──────────────────────┘         └──────────────────────┘
         │                                  │
         │                                  │
         ▼                                  ▼
┌──────────────────────┐         ┌──────────────────────┐
│   WebRTC (P2P)       │◄───────►│   Socket.io          │
│   (Video/Audio)      │         │   (Signaling)        │
└──────────────────────┘         └──────────────────────┘
                                          │
                                          ▼
                                 ┌──────────────────────┐
                                 │   MongoDB            │
                                 │   (Rooms/Messages)   │
                                 └──────────────────────┘
```

## Component Architecture

### Frontend (React)

```
App.js (Main Container)
│
├── VideoPlayer.js
│   ├── myVideo (Local stream)
│   └── userVideo (Remote stream)
│
├── Controls.js
│   ├── Account Info (Name, ID)
│   ├── Room Management
│   └── Call Controls
│
├── Notifications.js
│   └── Incoming Call Alerts
│
└── Chat.js
    ├── Message Display
    └── Message Input

SocketContext.js (Global State)
├── WebRTC Peer Connections
├── Socket.io Event Handlers
└── Media Stream Management
```

### Backend (Node.js)

```
server.js (Main Server)
│
├── Express App
│   ├── CORS Middleware
│   ├── JSON Parser
│   └── Routes
│       └── /api/rooms (Room Management)
│
├── Socket.io Server
│   ├── Connection Management
│   ├── Room Events
│   ├── WebRTC Signaling
│   │   ├── offer
│   │   ├── answer
│   │   └── ice-candidate
│   └── Chat Events
│
└── MongoDB Connection
    └── Models
        ├── Room.js
        └── Message.js
```

## Data Flow

### WebRTC Connection Establishment

```
User A                    Server                    User B
  │                         │                         │
  │──join-room────────────►│                         │
  │                         │◄────join-room───────────│
  │                         │                         │
  │──offer────────────────►│                         │
  │                         │────offer───────────────►│
  │                         │                         │
  │                         │◄───answer───────────────│
  │◄──answer───────────────│                         │
  │                         │                         │
  │──ice-candidate────────►│                         │
  │                         │────ice-candidate───────►│
  │                         │                         │
  │◄═══════════════════════╪═════════════════════════│
  │     Direct P2P WebRTC Connection (Video/Audio)   │
  │════════════════════════╪══════════════════════════►│
```

### Chat Message Flow

```
User A                    Server                    User B
  │                         │                         │
  │──send-message─────────►│                         │
  │                         │────receive-message─────►│
  │                         │                         │
  │                         │◄───send-message─────────│
  │◄──receive-message──────│                         │
```

## Technology Stack Details

### Frontend Dependencies
- **react**: ^19.2.0 - UI framework
- **react-dom**: ^19.2.0 - DOM rendering
- **socket.io-client**: ^4.8.1 - WebSocket client
- **simple-peer**: ^9.11.1 - WebRTC wrapper
- **axios**: ^1.12.2 - HTTP client
- **uuid**: ^13.0.0 - Unique ID generation

### Backend Dependencies
- **express**: ^4.18.2 - Web framework
- **socket.io**: ^4.5.4 - WebSocket server
- **mongoose**: ^7.0.3 - MongoDB ODM
- **cors**: ^2.8.5 - CORS middleware
- **dotenv**: ^16.0.3 - Environment variables

## Database Schema

### Room Model
```javascript
{
  roomId: String (unique),
  createdBy: String,
  participants: [{
    userId: String,
    joinedAt: Date
  }],
  createdAt: Date,
  isActive: Boolean
}
```

### Message Model
```javascript
{
  roomId: String,
  userId: String,
  userName: String,
  message: String,
  timestamp: Date
}
```

## Security Considerations

1. **CORS Configuration**: Restricts which origins can access the API
2. **Environment Variables**: Sensitive data stored in .env files
3. **WebRTC P2P**: Direct peer-to-peer connections for media
4. **HTTPS Requirement**: WebRTC requires HTTPS in production
5. **Input Validation**: Room IDs and messages should be validated

## Scalability Considerations

1. **Socket.io Rooms**: Efficient room-based communication
2. **P2P Connections**: Video/audio doesn't go through server
3. **MongoDB**: Scalable database for room/message storage
4. **Horizontal Scaling**: Can add multiple server instances with Redis adapter
5. **CDN Deployment**: Static React build can be served from CDN

## Future Enhancements

- [ ] TURN server for NAT traversal
- [ ] Redis adapter for Socket.io scaling
- [ ] User authentication (JWT)
- [ ] Screen sharing
- [ ] Recording functionality
- [ ] File sharing
- [ ] Group calls (3+ participants)
- [ ] End-to-end encryption
