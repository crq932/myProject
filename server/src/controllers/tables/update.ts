import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import users from '../../entity/users';
import { templates } from '../../entity/templates';
import { authorizeToken } from '../tokenFunctions/index';

interface UpdateUserProfile {
  email: string;
  nickname: string;
  password: string;
  image: string;
}

interface UpdateTemplate {
  content: string;
  category: string;
  font: string;
  font_size: number;
  letter_type: string;
}

const updateTables = {
  userUpdate: async (req: Request, res: Response)  => {
    const accessTokenData = await authorizeToken(req,res);
    const { nickname, password, image }: UpdateUserProfile = req.body;
    const userRepository = getRepository(users);
    const userInfo = await userRepository.findOne({
      email: accessTokenData. email,
    });
  
    if (!userInfo) {
      return res.status(404).json({ message: 'User not exists' });
    } else {
      await userRepository.update(userInfo.id, 
        { 
          nickname : nickname,
          password : password,
          image : image
        }); 
      return res.status(200).json({ message: 'ok' });
    }  
  },

  templateUpdate: async (req: Request, res: Response)  => {
    await authorizeToken(req,res);
    const templateId = Number(req.params.templateId);
    const { content, category, font, font_size, letter_type}: UpdateTemplate = req.body;
    const templateRepository = getRepository(templates);
    await templateRepository.update(templateId, 
      { 
        content : content,
        category : category,
        font : font,
        font_size : font_size,
        letter_type : letter_type
      }); 
    return res.status(200).json({ message: 'ok' });
  },


};

export { updateTables }; 