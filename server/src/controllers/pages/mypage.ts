import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import {templates} from  '../../entity/templates';
import { authorizeToken } from '../tokenFunctions/index';

export default async (req: Request, res: Response) => {
  const accessTokenData = await authorizeToken(req, res);
  const userRepository = await getRepository(users);
  const userInfo = await userRepository.findOne({
    email: accessTokenData.email,
  });

  if (!userInfo) {
    return res.status(401).json({ message: 'error' });
  }
  const templateInfo = await getRepository(templates)
    .createQueryBuilder('templates')
    .select([
      'templates.content',
      'templates.font',
      'templates.font_size',
      'templates.hits',
      'templates.letter_type',
      'templates.created_at'
    ])
    .leftJoin('templates.users_templates','users_templates')
    .leftJoin('users_templates.users_id','users')
    .where('users_templates.users_id = :users_id', { users_id: String(userInfo.id) })
    .getMany();
  return res.status(200).json({ message: 'ok', user : userInfo , templates : templateInfo });
};