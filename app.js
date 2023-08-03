const express = require('express'),
  cors = require('cors'),
  app = express();

require('./config/db');

const userRouter = require('./routes/users.route');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/users', userRouter);

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use((request, response, next) => {
  response.status(404).json({ message: 'route not found' });
});

app.use((error, request, response, next) => {
  response.status(404).json({ message: 'handling server error' });
});

module.exports = app;
