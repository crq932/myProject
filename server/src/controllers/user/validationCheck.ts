import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';

const validationCheck = {
  email: async (req: Request, res: Response)  => {
    const userRepository = await getRepository(users);
    const userInfo = await userRepository.findOne({
      email: req.body.value
    });
    
    if (!userInfo) {
      return res.status(200).json({ message : 'ok' });      
    }
    return res.status(401).json({ message : 'valid email' });
  },

  nickname: async (req: Request, res: Response)  => {
    const userRepository = await getRepository(users);
    const userInfo = await userRepository.findOne({
      nickname: req.body.value
    });
    
    if (!userInfo) {
      return res.status(200).json({ message : 'ok' });      
    }
    return res.status(401).json({ message : 'valid nickname' });
  },

  delMyAccPassword: async (req: Request, res: Response)  => {
    const userRepository = await getRepository(users);
    const userInfo = await userRepository.findOne({
      email : req.body.email,
      password: req.body.password
    });
    
    if (!userInfo) {
      return res.status(401).json({ message : 'error' });      
    }
    return res.status(200).json({ message : 'ok' });
  },
};

export { validationCheck };