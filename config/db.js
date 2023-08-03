const mongoose = require('mongoose'),
  config = require('./config');

const db_Url = config.db.url;

mongoose
  .connect(db_Url)
  .then(() => {
    console.log('mongoDB atlas is connected');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
