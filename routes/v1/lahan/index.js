import express, { Router } from 'express';
import Test from './test';

const lahanRouter = Router();

lahanRouter.route('/testLahan').get(Test);

export default lahanRouter;
