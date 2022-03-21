import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { templates } from '../../entity/templates';

export default async (req: Request, res: Response) => {
   
  const templateRepository = await getRepository(templates);
  const templateInfo = await templateRepository
    .createQueryBuilder()
    .getRawMany();
  
  if (!templateInfo) {
    return res.status(401).json({ message: 'error' });
  } 
  return res.status(200).json({ message: 'ok', template : templateInfo });
};