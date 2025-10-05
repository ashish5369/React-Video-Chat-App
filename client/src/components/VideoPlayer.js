import React, { useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';
import '../styles/VideoPlayer.css';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream } = useContext(SocketContext);

  return (
    <div className="video-container">
      {stream && (
        <div className="video-wrapper">
          <div className="video-card">
            <h3>{name || 'You'}</h3>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="video-wrapper">
          <div className="video-card">
            <h3>Other User</h3>
            <video playsInline ref={userVideo} autoPlay className="video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
