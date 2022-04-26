const User = require('../models/User');
const jwt = require('jsonwebtoken');
// const { config } = require('dotenv');
require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    //인증처리 하는 곳
    //클라이언트 쿠키에서 토큰을 가져온다
    const token = req.cookies['x_auth']; // const token = req.cookies.x_auth;
    //토큰을 복호화한 후 유저를 찾는다.
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    //user._id를 이용해서 유저를 찾은 다음에
    //클라이언트에서 가져온 token과 DB에 보관된 token이 일치하는지 확인
    const user = await User.findOne({ _id: decoded, token });
    //유저가 없으면 인증 No
    if (!user) return res.json({ isAuth: false, error: true });
    //인증된 유저가 있다면 req에 넣어준다. (req에 넣어주어야 미들웨어 다음의 콜백펑션에 전달된다.)
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    throw error;
  }
};

module.exports = auth;
