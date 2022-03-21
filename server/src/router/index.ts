import * as express from 'express';
const router = express.Router();
import signupController from '../controllers/user/Signup';
import loginController from '../controllers/user/Login';
import logoutController from '../controllers/user/logout';
import { validationCheck } from '../controllers/user/validationCheck';
import googleController from '../controllers/user/google';
import kakaoController from '../controllers/user/kakao';

import { updateTables } from '../controllers/tables/update';
import { deleteTables } from '../controllers/tables/delete';

import mypageController from '../controllers/pages/mypage';
import mainpageController from '../controllers/pages/mainpage';

import writeLetterController from '../controllers/template/writeLetter';
import readLetterController from '../controllers/template/readLetter';

import { Images } from '../controllers/aws/util';

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/logout',logoutController);
router.post('/emailcheck', validationCheck.email);
router.post('/nickcheck', validationCheck.nickname);
router.post('/delpassword', validationCheck.delMyAccPassword);
router.post('/google', googleController.token);
router.post('/kakao', kakaoController.token);

router.patch('/updateuser/:userId', updateTables.userUpdate);
router.patch('/updatetemplate/:templateId', updateTables.templateUpdate);
router.delete('/deleteuser/:userId', deleteTables.userDelete);
router.delete('/deletetemplate/:templateId', deleteTables.templateDelete);

router.get('/mypage', mypageController);
router.get('/mainpage', mainpageController);

router.post('/writeletter', writeLetterController);
router.get('/readletter/:templateId', readLetterController);

router.post('/image/:userImageName', Images.uploadUser.single('image'),Images.uploadImage);
export default router;