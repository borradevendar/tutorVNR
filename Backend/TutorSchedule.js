const jwt = require('jsonwebtoken');
require('dotenv').config();
const Tutor = require('./Tutor.js');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const token = authHeader.split(' ')[1];

  try {
    console.log(token);
    console.log(process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tutor = decoded;
    next();
  } catch (error) {
    
    console.error(error);
    res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};

module.exports = (app) => {
  app.post("/tutor/schedule", verifyJWT, async (req, res) => {
    const { subjects, time } = req.body; 
    try {
      const currentTutor = await Tutor.findById(req.tutor.tutor_id);

      if (!currentTutor) {
        return res.status(404).json({ message: "Tutor not found" });
      }

      currentTutor.subjects = subjects;
      currentTutor.time = time;

      await currentTutor.save();

      res.json({ message: "Schedule updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating schedule" });
    }
  });
};
