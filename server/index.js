const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const User = require('./models/User');
const config = require('./config/key');

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
    // console.log('before save');
    // const savedUser = await user.save();
    // console.log('savedUser', savedUser);
    // console.log('after save');
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
