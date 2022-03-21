import axios from 'axios';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { generateToken } from '../tokenFunctions/index';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  token: async (req: Request, res: Response) => {
    const code = req.body.authorizationCode;
    const rest_api_key = process.env.KAKAO_CLIENT_ID;
    const redirect_uri = process.env.KAKAO_REDIRECT_URI;
    
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      )
      .then((response) => res.status(200).send({message : 'ok', data : response.data}));
  },
          
};