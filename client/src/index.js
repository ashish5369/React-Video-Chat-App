import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/SocketContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
