const dotenv = require('dotenv');

dotenv.config();

const DEVELOPMENT = "development";
const LOCALHOST = "localhost";
const STAGING = "staging";
const PRODUCTION = "production";

const Environments = {
  [LOCALHOST]: LOCALHOST,
  [DEVELOPMENT]: DEVELOPMENT,
  [STAGING]: STAGING,
  [PRODUCTION]: PRODUCTION
};

module.exports = {
  environment: process.env.CURRENT_ENV || Environments[LOCALHOST],
  server: {
    PORT: process.env.PORT || 8080,
  },
  database: {
    [LOCALHOST]: { },
    [DEVELOPMENT]: { },
    [STAGING]: { },
    [PRODUCTION]: { }
  },
  api: {
    prefix: ""
  }
};