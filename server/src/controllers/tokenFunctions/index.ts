import { Request, Response } from 'express';
import dotenv from 'dotenv';
const jwt = require('jsonwebtoken');
dotenv.config();

export async function generateToken(email: string) {
  return jwt.sign(
    {
      email: email,
    },
    process.env.JWT_SECRETKEY,
    { expiresIn: '2d' },
  );
}
export async function authorizeToken(req: Request, res: Response) {
  const authorization = req.headers.cookie;
  if (!authorization) {
    return res.status(403).json({ message: 'Invalid Accesstoken' });
  }
  const token = authorization.split('=')[1].split(' ')[0];
  const data = jwt.verify(
    token,
    process.env.JWT_SECRETKEY,
    (err: object|string, tokenData: object) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid Accesstoken' });
      } else {
        return tokenData;
      }
    },
  );
  return data;

}  