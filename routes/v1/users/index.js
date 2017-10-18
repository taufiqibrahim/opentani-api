import express, { Router } from 'express';
import Test from './test';
import SignUp from './signup';
import Authenticate from './authenticate';

import Login from './login';
import Logout from './logout';
import Exists from './exists';

import { verifyTokenMiddleware } from '../../../utils/token';
import { verifyOtp } from '../../../utils/otp';

const userRouter = Router();

//middleware use
userRouter.use('/signup', verifyTokenMiddleware);
userRouter.use('/login', verifyTokenMiddleware);
userRouter.use('/logout', verifyTokenMiddleware);
userRouter.use('/exists', verifyTokenMiddleware);
userRouter.post('/authenticate', verifyTokenMiddleware, verifyOtp);

userRouter.route('/test').get(Test);
userRouter.route('/signup').post(SignUp);
userRouter.route('/login').post(Login);
userRouter.route('/logout').post(Logout);
userRouter.route('/exists').get(Exists);
userRouter.route('/authenticate').post(Authenticate);

export default userRouter;
