require('dotenv').config();

const development = {
  app: {
    port: process.env.port || 4000,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:2701/userDemoDB',
  },
};

module.exports = development;
