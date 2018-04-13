const express = require('express');
const Blockchain = require('../blockchain');

// this allows a user to define a HTTP_PORT at the command license
// or use the default 3001
const HTTP_PORT = process.env.HTTP_PORT || 3001;

// set up app
const app = express();
const bc = new Blockchain;

// API get request
// req = request, res = response, provided by express
app.get('/blocks', (req, res) => {
  res.json(bc.chain);
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
