import React, { useContext } from 'react';
import { SocketContext } from '../contexts/SocketContext';
import '../styles/Notifications.css';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="notification-container">
          <h2>{call.name} is calling:</h2>
          <button onClick={answerCall} className="btn btn-success">
            Answer
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
