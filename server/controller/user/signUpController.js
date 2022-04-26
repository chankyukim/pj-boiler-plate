const User = require('../../models/User');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
  const { username, email, pwd } = req.body;

  if (!email || !pwd)
    return res.status(400).json({
      message: 'Email and Password are required.',
    });

  const user = await User.findOne({ email }).exec();
  if (user) return res.sendStatus(409); //conflict

  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPwd,
    });
    res.status(201).json({ success: `New User ${username} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createNewUser };
