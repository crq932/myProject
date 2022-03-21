import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import {templates} from  '../../entity/templates';
  
export default async (req: Request, res: Response) => {
  const templateId = Number(req.params.templateId);
  const templateRepository = getRepository(templates);
  const templateInfo = await templateRepository.findOne({
    id : templateId
  });

  if (!templateInfo) {
    return res.status(404).json({ message: 'template not exists' });
  } 

  templateInfo.hits++;
  await templateRepository.update(templateId, 
    { 
      hits : templateInfo.hits
    }); 
  return res.status(200).json({ message: 'ok', templates : templateInfo });

};