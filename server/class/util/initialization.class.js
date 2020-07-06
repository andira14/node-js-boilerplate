import jwt from 'jsonwebtoken';

require('dotenv').config();

class Initialization {
  constructor(token) {
    this.token = token;
  }

  getJwtData() {
    return jwt.verify(this.jwt, process.env.JWT_TOKEN);
  }
}

export default Initialization;
