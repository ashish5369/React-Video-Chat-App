import React, { useState, useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';
import '../styles/Controls.css';

const Controls = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, joinRoom, roomId, setRoomId } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      joinRoom(roomId);
    }
  };

  return (
    <div className="controls-container">
      <div className="control-section">
        <h3>Account Info</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <div className="user-id">
          <strong>Your ID:</strong> {me}
        </div>
      </div>

      <div className="control-section">
        <h3>Room</h3>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="input-field"
        />
        <button onClick={handleJoinRoom} className="btn btn-primary">
          Join Room
        </button>
      </div>

      <div className="control-section">
        <h3>Make a Call</h3>
        <input
          type="text"
          placeholder="ID to call"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          className="input-field"
        />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall} className="btn btn-danger">
            Hang Up
          </button>
        ) : (
          <button onClick={() => callUser(idToCall)} className="btn btn-success">
            Call
          </button>
        )}
      </div>
    </div>
  );
};

export default Controls;
