const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const User = require('./models/User');
const config = require('./config/key');
const bcrypt = require('bcrypt');

//mongoose
async function main() {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('mongoDB connect...');
  } catch (error) {
    console.log(error);
  }
}
main();

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
