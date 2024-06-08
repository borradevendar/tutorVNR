require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
})
    .then(()=> console.log("Connected to MongoDb"))
    .catch((err)=>console.error("MongoDB Connection error : ",err));
