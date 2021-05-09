const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
  console.log('He remembered the password!');
  res.send('Now you remembered the password!');
});

app.use('/', (req, res, next) => {
  console.log('Did he forgot his password?');
  res.send("Are you sure that you aren't a user?");
});

app.listen(3001);
