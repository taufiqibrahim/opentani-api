import express, { Router } from 'express';
import userRouter from './users';
import lahanRouter from './lahan';

const rootRouter = Router();

rootRouter.use('/v1/users', userRouter);
rootRouter.use('/v1', lahanRouter);

export default rootRouter;