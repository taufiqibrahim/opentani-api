import express, { Router } from 'express';
import userRouter from './users';
import lahanRouter from './lahan';

const rootRouter = Router();

/*
 * Simulate delay for development
 */
rootRouter.use((req, res, next) => {
  setTimeout(next, 3000);
});

rootRouter.use('/v1/users', userRouter);
rootRouter.use('/v1', lahanRouter);

export default rootRouter;
