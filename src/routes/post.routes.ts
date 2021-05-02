import { Router } from 'express';
import * as postCtrl from '../controllers/post.controller';
const router = Router();


router.get('/post',postCtrl.getAllUsers);

export default router;