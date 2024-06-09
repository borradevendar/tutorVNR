
const User = require('./User.js');
const bcryptjs = require('bcryptjs');
module.exports = (app) => {
app.post('/login', async (req, res) => {
    const { rollno, password } = req.body;
  
    try {
      const user = await User.findOne({ rollno });
      if (!user) {
        return res.status(401).json({ message: 'Invalid rollno or password' });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  })};