require("dotenv").config();
const User = require("./Backend/User");
const Tutor = require("./Backend/Tutor");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserLogin = require('./Backend/UserLogin.js');
const TutorLogin = require('./Backend/TutorLogin.js');

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("MongoDB Connection error : ", err));

const app = express();
app.use(cors());
app.use(express.json());

//User Registration.
app.post("/register", async (req, res) => {
  const { name,rollno, email, password, } = req.body;

  try {
    const user = await User.findOne({ email }|| {rollno});
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ name, rollno, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// Tutor Registration.
app.post("/tutor/register", async (req, res) => {
    const { name, rollno, email, password } = req.body;
  
    try {
      const tutor = await Tutor.findOne({ email }|| {rollno});
      if (tutor) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const newTutor = new Tutor({ name, rollno, email, password });
      await newTutor.save();
  
      res.status(201).json({ message: "Tutor created successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });
UserLogin(app);
TutorLogin(app);

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Listening at port number : ${port}`))
  .on('error',(err) => console.log("Hello Developer error occured ", err));
