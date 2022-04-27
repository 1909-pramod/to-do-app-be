const dotenv = require('dotenv');
dotenv.config();

const keys = {
  jwtKey: process.env.JWT_KEY
}

export default keys;