import { Request, Response } from 'express';
import dotenv from 'dotenv';
import multer  from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

dotenv.config();
const region = 'ap-northeast-2';
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const Images = {
  uploadUser:  
    multer({ storage: multerS3({
      s3: s3,
      bucket: 'finalproject-letter',
      acl: 'public-read',
      key: (req: Request, file, cb) => { 
        const id =  req.params.id;
        cb(null,id);
      }
    })
    })
  ,

  uploadImage: async (req: Request, res: Response)  => {
    console.log(req.file);
    
    if (!req.file) {
      return res.status(400).send({ message: 'error' });
    }
    else {
      return res.status(200).json({ message: 'ok' });
    }
  },
};

export { Images };