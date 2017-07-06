import express, { Router } from 'express';
import Test from './test';
import SignUp from './signup';
//import SignUpEmail from './signupEmail';

import Login from './login';
import Logout from './logout';
import Exists from './exists';

import { verifyTokenMiddleware } from '../../../utils/token';
import { verifyOtp } from '../../../utils/otp';

const userRouter = Router();

//middleware use
userRouter.use('/logout', verifyTokenMiddleware);
userRouter.use('/exists', verifyTokenMiddleware);
userRouter.post('/verify', verifyOtp)

userRouter.route('/test').get(Test);
userRouter.route('/signup').post(SignUp);
userRouter.route('/login').post(Login);
userRouter.route('/logout').post(Logout);
userRouter.route('/exists').get(Exists);

export default userRouter;