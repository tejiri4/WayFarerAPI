import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL_DEV,
    logging: false,
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
    logging: true,
  },
  production: {
    url: process.env.DATABASE_URL,
    ssl: true,
    dialectOptions: {
      ssl: true,
    },
  },
};
