const app = require('./app'),
  config = require('./config/config');

const port = config.app.port,
  address = '127.0.0.1';

app.listen(port, () => {
  console.log(`Server running at http://${address}:${port}`);
});
