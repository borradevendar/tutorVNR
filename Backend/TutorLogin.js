const Tutor = require('./Tutor.js');
const bcryptjs = require('bcryptjs');
module.exports = (app) => {
app.post('/tutor/login', async (req, res) => {
    const { rollno, password } = req.body;
  
    try {
      const tutor = await Tutor.findOne({ rollno });
      if (!tutor) {
        return res.status(401).json({ message: 'Invalid rollno or password' });
      }
  
      const isMatch = await bcryptjs.compare(password, tutor.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
  
      res.status(200).json({ message: 'Login successful', tutor });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  })};