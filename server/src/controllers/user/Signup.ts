import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';

interface Signup {
  email: string;
  nickname: string;
  password: string;
}

export default async (req: Request, res: Response) => {

  const { email, nickname, password }: Signup = req.body;
  const usersRepository = getRepository(users);
  
  if (!email || !nickname || !password) {
    return res.status(400).json({ message: 'error' });
  } else {
    const findEmail = await usersRepository.findOne({ email: email });
    const findNickname = await usersRepository.findOne({ nickname: nickname});
    if (findEmail || findNickname) {
      return res.status(409).json({ message: 'Account already exists' });
    }
    await usersRepository.insert({
      email: email,
      nickname: nickname,
      password: password,
      name: req.body.name,
      gender : req.body.gender,
      image : 'no image'
    });
  
    return res.status(201).json({ message: 'ok' });
  }
};