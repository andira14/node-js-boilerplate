import { body } from 'express-validator';

export default {
  login: () => [
    body('email').notEmpty(),
    body('password').notEmpty(),
  ],
};
