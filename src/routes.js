import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Eduardo Budny',
    email: 'email@email.com',
    password_hash: '12344123',
  });
  return res.json(user);
});

export default routes;
