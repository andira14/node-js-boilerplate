require('dotenv').config();
import jwt from 'jsonwebtoken';

export class Initialization {
    constructor(jwt){
        this.jwt = jwt;
    }

    getJwtData(){
        return jwt.verify(this.jwt, process.env.JWT_TOKEN)
    }
}