# Quick Start Guide

## Prerequisites
- Node.js v14 or higher
- MongoDB (local or cloud)
- npm or yarn

## Installation

### 1. Install all dependencies
```bash
npm run install-all
```

Or install separately:
```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 2. Configure Environment Variables

**Server Configuration** (`server/.env`):
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/react-video-chat
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

**Client Configuration** (`client/.env`):
```env
REACT_APP_SERVER_URL=http://localhost:5000
```

## Running the Application

### Development Mode (Both servers)
```bash
npm run dev
```

This will start both the backend server (port 5000) and the frontend dev server (port 3000).

### Running Separately

**Start Backend Server**:
```bash
cd server
npm start
# Or with auto-reload:
npm run dev
```

**Start Frontend**:
```bash
cd client
npm start
```

## Production Build

Build the React app for production:
```bash
cd client
npm run build
```

The optimized build will be in the `client/build` folder.

## Usage

1. Open http://localhost:3000 in your browser
2. Enter your name in the "Account Info" section
3. Copy your ID or share it with others
4. To join a room: Enter a room ID and click "Join Room"
5. To call someone: Enter their ID and click "Call"
6. When you receive a call, click "Answer"
7. Use the chat box to send messages during the call

## Troubleshooting

### Video/Audio not working
- Grant camera and microphone permissions in your browser
- Use HTTPS in production (WebRTC requirement)
- Check browser console for errors

### Cannot connect to server
- Verify the server is running on port 5000
- Check CORS settings in server configuration
- Ensure CLIENT_URL environment variable is set correctly

### MongoDB connection error
- Make sure MongoDB is running
- Verify the MONGO_URI in the .env file
- The app will run without MongoDB but room data won't persist

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Need Help?
Check the full README.md for detailed documentation.
