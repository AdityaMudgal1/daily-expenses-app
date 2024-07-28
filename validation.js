const User = require('../models/User');

exports.validateUser = async (req, res, next) => {
  const { email, name, mobile } = req.body;
  if (!email || !name || !mobile) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists' });
  }
  next();
};
