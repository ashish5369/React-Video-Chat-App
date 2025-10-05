const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Create a new room
router.post('/create', async (req, res) => {
  try {
    const { roomId, userId } = req.body;
    
    // Input validation
    if (!roomId || typeof roomId !== 'string' || roomId.length > 100) {
      return res.status(400).json({ message: 'Invalid room ID' });
    }
    if (!userId || typeof userId !== 'string' || userId.length > 100) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    
    const existingRoom = await Room.findOne({ roomId: { $eq: roomId } });
    if (existingRoom) {
      return res.status(400).json({ message: 'Room already exists' });
    }

    const room = new Room({
      roomId,
      createdBy: userId,
      participants: [{ userId }]
    });

    await room.save();
    res.status(201).json({ message: 'Room created successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Error creating room', error: error.message });
  }
});

// Get room details
router.get('/:roomId', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    
    // Input validation
    if (!roomId || typeof roomId !== 'string' || roomId.length > 100) {
      return res.status(400).json({ message: 'Invalid room ID' });
    }
    
    const room = await Room.findOne({ roomId: { $eq: roomId } });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching room', error: error.message });
  }
});

// Join a room
router.post('/:roomId/join', async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const { userId } = req.body;
    
    // Input validation
    if (!roomId || typeof roomId !== 'string' || roomId.length > 100) {
      return res.status(400).json({ message: 'Invalid room ID' });
    }
    if (!userId || typeof userId !== 'string' || userId.length > 100) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    
    const room = await Room.findOne({ roomId: { $eq: roomId } });
    
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    const alreadyJoined = room.participants.some(p => p.userId === userId);
    if (!alreadyJoined) {
      room.participants.push({ userId });
      await room.save();
    }

    res.json({ message: 'Joined room successfully', room });
  } catch (error) {
    res.status(500).json({ message: 'Error joining room', error: error.message });
  }
});

module.exports = router;
