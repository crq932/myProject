import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { templates } from '../../entity/templates';
import { users_templates } from '../../entity/users_templates';
import { authorizeToken } from '../tokenFunctions/index';

interface WriteLetter {
  content: string;
  category: string;
  font: string;
  font_size: number;
  letter_type: string;
}
  
export default async (req: Request, res: Response) => {
  const accessTokenData = await authorizeToken(req,res);
  const userRepository = getRepository(users);
  const userInfo = await userRepository.findOne({
    email: accessTokenData.email,
  });
 
  if (!userInfo) {
    return res.status(401).json({ message: 'error' });
  } 

  const { content, category, font, font_size, letter_type }: WriteLetter = req.body;
  
  if (!content || !category || !font || !font_size || !letter_type) {
    return res.status(400).json({ message: 'error' });
  }

  const templateRepository = getRepository(templates);
  await templateRepository.insert({
    content: content,
    category: category,
    font: font,
    font_size: font_size,
    letter_type : letter_type,
    hits : 0
  });
  const usersTemplatesRepository = getRepository(users_templates);
  const templateInfo = await templateRepository
    .createQueryBuilder()
    .orderBy('id','DESC')
    .limit(1)
    .getRawOne();
  await usersTemplatesRepository.insert({
    users_id: userInfo,
    templates_id: templateInfo.templates_id
  });
  return res.status(201).json({ message: 'ok' });
};