import { Router } from 'express';

import SessionsController from './app/controllers/SessionsController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
