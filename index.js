const express = require('express');
const crypto = require('crypto');

const app = express();

app.get('/', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hi.');
  });
});

app.get('/fast', (req, res) => {
  res.send('Fast.');
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
