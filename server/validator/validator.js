import { validationResult } from 'express-validator';
import Response from '../class/util/response.class';

export default {
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const response = new Response(res);
    return response.contentFail(response.statusUnprocessableEntity, errors);
  },
};
