const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const config = require('./config/key');
require('dotenv').config();

//mongoose
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('mongoDB connect...');
  } catch (error) {
    console.log(error);
  }
}

main();

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cookie-parser
app.use(cookieParser());

//route
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    //비밀번호 암호화
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //user의 password를 hashedPassword로 교체
    user.password = hashedPassword;
    //데이터를 데이터 베이스에 저장
    await user.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
});

app.post('/login', async (req, res) => {
  try {
    //데이터베이스에 해당하는 이메일의 사용자가 있는지 확인
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: '이메일에 해당하는 유저가 없습니다.',
      });
    }

    //해당하는 이메일이 있다면 비밀번호가 맞는지 확인
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
    //비밀번호가 맞다면 토큰 생성
    const token = jwt.sign(user._id.toHexString(), process.env.SECRET_KEY);
    //생성한 토큰을 해당 user의 토큰에 저장
    user.token = token;
    await user.save();
    //쿠키 생성
    res
      .cookie('x_auth', user.token) //
      .status(200)
      .json({ loginSuccess: true, userId: user._id });
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
