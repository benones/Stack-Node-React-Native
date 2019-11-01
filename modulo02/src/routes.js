import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Ben',
        email: 'ben@ben',
        password_hash: '123456789',
        provider: true
    });

    return res.json(user);
});

export default routes;
