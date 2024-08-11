const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

// Controller to check if the provided name and password match
const checkCredentials = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Find the admin with the provided name
    const admin = await Admin.findOne({ name });

    if (!admin) {
      // If no admin with the provided name is found, return false
      return res.json({ success: false, message: 'Incorrect name or password' });
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (isPasswordMatch) {
      // If the password matches, return true
      return res.json({ success: true, message: 'Authentication successful' });
    } else {
      // If the password doesn't match, return false
      return res.json({ success: false, message: 'Incorrect name or password' });
    }
  } catch (error) {
    console.error('Error checking admin credentials:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const createAdmin = async (req, res) => {
    const { name, password } = req.body;
  
    try {

      if (!name || !password) {
        return res.status(400).json({ success: false, message: 'Name and password are required' });
        }
      // Generate a salt and hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
  
      const newAdmin = new Admin({
        name,
        password: hashedPassword // Store the hashed password
      });
  
      const savedAdmin = await newAdmin.save();
      res.status(201).json(savedAdmin);
    } catch (err) {
      console.error(err); // Log the full error for debugging
      res.status(500).json({ success: false, message: err.message }); // Send error message
    }
  };
  

module.exports = {
  checkCredentials, createAdmin
};
