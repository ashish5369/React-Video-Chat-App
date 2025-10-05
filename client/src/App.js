import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Controls from './components/Controls';
import Notifications from './components/Notifications';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Video Chat App</h1>
        <p>Connect with friends through video calls</p>
      </header>
      
      <VideoPlayer />
      <Controls />
      <Notifications />
      <Chat />
      
      <footer className="app-footer">
        <p>Built with React, Node.js, Express, Socket.io, and WebRTC</p>
      </footer>
    </div>
  );
}

export default App;
