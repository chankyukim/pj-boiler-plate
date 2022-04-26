const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
  const { email, pwd } = req.body;
  if (!email || !pwd) res.status(400).json({ message: 'Email and Password are required.' });

  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) return res.sendStatus(401); //UnAuthorized

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (!match) return res.sendStatus(401); //UnAuthorized

  const roles = Object.values(foundUser.roles).filter(Boolean);

  //create JWT
  const accessToken = jwt.sign(
    {
      UserInfo: {
        email: foundUser.email,
        roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  const refreshToken = jwt.sign(
    {
      email: foundUser.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );

  foundUser.refreshToken = refreshToken;
  await foundUser.save();

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    sameSite: 'None',
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken, roles });
};

module.exports = { handleLogin };
