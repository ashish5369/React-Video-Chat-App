const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/react-video-chat';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Don't exit process in development - allow server to run without DB
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    } else {
      console.log('Running without database connection...');
    }
  }
};

module.exports = connectDB;
