import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { templates } from '../../entity/templates';
import { authorizeToken } from '../tokenFunctions/index';

const deleteTables = {
  userDelete: async (req: Request, res: Response)  => {
    const accessTokenData = await authorizeToken(req,res);
    const userRepository = getRepository(users);
    const userInfo = await userRepository.findOne({
      email: accessTokenData.email,
    });

    if (!userInfo) {
      return res.status(401).json({ message: 'error' });
    } 

    await userRepository.delete({ id: userInfo.id });
    return res.status(200).json({ message: 'ok' });
  },

  templateDelete: async (req: Request, res: Response)  => {
    await authorizeToken(req,res);
    const templateId = Number(req.params.templateId);
    const templateRepository = getRepository(templates);
    templateRepository.delete(templateId);
    return res.status(200).json({ message: 'ok' });
  },
};

export { deleteTables };