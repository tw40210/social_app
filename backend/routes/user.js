import express from 'express';

import { signIn, singUp } from '../controllers/user.js'

const router = express.Router();

router.post('/signIn', signIn);
router.post('/signUp', singUp);

export default router;