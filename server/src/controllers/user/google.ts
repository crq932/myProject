import axios from 'axios';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { generateToken } from '../tokenFunctions/index';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  token: async (req: Request, res: Response) => {
    const URL = 'https://oauth2.googleapis.com/token';
    const code = req.body.authorizationCode;
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;
    const redirect_uri = process.env.GOOGLE_REDIRECT_URI;
    const grant_type = 'authorization_code';
    
    await axios
      .post(URL, { code, client_id, client_secret, redirect_uri, grant_type })
      .then((response) => res.status(200).send({message : 'ok', data : response.data}));
  },
    
};