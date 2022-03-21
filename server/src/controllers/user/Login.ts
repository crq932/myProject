import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { generateToken } from '../tokenFunctions/index';

interface Login {
    email: string;
    password: string;
  }
  
export default async (req: Request, res: Response) => {

  const { email, password }: Login = req.body;
  const usersRepository = getRepository(users);

  if (!email || !password) {
    return res.status(400).json({ message: 'error' });
  } 
  const userInfo = await usersRepository.findOne({
    email: email,
    password: password,
  });
  if (userInfo) {
    const token = await generateToken(userInfo.email);
    userInfo.password = '';
    return res
      .cookie('jwt', token, {
        httpOnly: true,
      })
      .status(200)
      .send({ message: 'ok', user : userInfo, tokendata : token });

  } else {
    return res.status(404).json({ message: 'User not exists' });
  }

  
};