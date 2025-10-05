# React Video Chat App

A full-stack MERN (MongoDB, Express, React, Node.js) video chat application with real-time communication using WebRTC and Socket.io.

## Features

- 🎥 Real-time video and audio communication
- 💬 Text chat functionality
- 🏠 Room-based video calls
- 👥 Multiple user support
- 📱 Responsive design
- 🔒 Secure peer-to-peer connections

## Technology Stack

### Frontend
- **React** - UI framework
- **Socket.io Client** - Real-time communication
- **Simple Peer** - WebRTC wrapper for peer connections
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - Database for storing room and message data
- **Mongoose** - MongoDB object modeling

## Project Structure

```
React-Video-Chat-App/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts
│   │   ├── styles/        # CSS files
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── package.json
│   └── .env.example
├── server/                 # Node.js backend
│   ├── config/            # Configuration files
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   ├── server.js          # Server entry point
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ashish5369/React-Video-Chat-App.git
cd React-Video-Chat-App
```

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/react-video-chat
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Setup Frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the client directory:

```env
REACT_APP_SERVER_URL=http://localhost:5000
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system. If using a local installation:

```bash
mongod
```

### Start the Backend Server

```bash
cd server
npm start
# Or for development with auto-reload:
npm run dev
```

The server will start on `http://localhost:5000`

### Start the Frontend

In a new terminal:

```bash
cd client
npm start
```

The React app will open at `http://localhost:3000`

## Usage

1. **Set Your Name**: Enter your name in the "Account Info" section
2. **Create/Join a Room**: Enter a room ID and click "Join Room"
3. **Start a Call**: 
   - Share your ID with another user
   - Enter their ID in the "Make a Call" section
   - Click "Call" to initiate the video call
4. **Answer a Call**: When receiving a call, click "Answer" in the notification
5. **Chat**: Use the chat box to send text messages during the call
6. **End Call**: Click "Hang Up" to end the call

## API Endpoints

### Rooms

- `POST /api/rooms/create` - Create a new room
- `GET /api/rooms/:roomId` - Get room details
- `POST /api/rooms/:roomId/join` - Join a room

### Health Check

- `GET /health` - Server health check
- `GET /` - API info

## Socket Events

### Client to Server
- `join-room` - Join a video chat room
- `offer` - Send WebRTC offer
- `answer` - Send WebRTC answer
- `ice-candidate` - Send ICE candidate
- `send-message` - Send chat message

### Server to Client
- `user-connected` - User joined the room
- `user-disconnected` - User left the room
- `receive-message` - Receive chat message
- `callUser` - Incoming call notification
- `callAccepted` - Call was accepted

## Development

### Backend Development

```bash
cd server
npm run dev
```

### Frontend Development

```bash
cd client
npm start
```

## Testing

### Backend
```bash
cd server
npm test
```

### Frontend
```bash
cd client
npm test
```

## Deployment

### Backend Deployment (Heroku example)

1. Create a Heroku app
2. Set environment variables
3. Deploy:

```bash
cd server
git push heroku main
```

### Frontend Deployment (Netlify/Vercel)

1. Build the production version:

```bash
cd client
npm run build
```

2. Deploy the `build` folder to your hosting service

## Environment Variables

### Server
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string
- `CLIENT_URL` - Frontend URL for CORS
- `NODE_ENV` - Environment (development/production)

### Client
- `REACT_APP_SERVER_URL` - Backend server URL

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: WebRTC requires HTTPS in production environments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Tutorial reference: https://www.youtube.com/watch?v=KCqdXubNoE4&t=65s
- WebRTC documentation
- Socket.io documentation

## Support

For issues and questions, please open an issue on GitHub.

## Future Enhancements

- [ ] Screen sharing capability
- [ ] Recording functionality
- [ ] User authentication
- [ ] Room password protection
- [ ] File sharing
- [ ] Multiple participant support (3+ users)
- [ ] Virtual backgrounds
- [ ] Noise cancellation
