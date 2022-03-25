const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(
    'mongodb+srv://chankyu:0818@bolierplate.ojt4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );
}

main() //
  .then(console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
