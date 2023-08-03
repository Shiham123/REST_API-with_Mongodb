const express = require('express'),
  app = express();

const port = 4000,
  address = '127.0.0.1';

app.listen(port, () => {
  console.log(`Server running at http://${address}:${port}`);
});
