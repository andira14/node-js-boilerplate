import express from 'express';
import route from '../server/routes';
import { Response } from '../server/class/util/response.class';

require('dotenv').config();

const app = express();

const baseUrl = '/api';

app.use(baseUrl, route);

app.use((err, req, res, next) => {
  console.error(err);

  return next(err.stack);
});

// error handler, send stacktrace only during development
app.use((err, _, res, next) => {
  if (err) {
    const response = new Response(res);

    return response.systemError(err);
  }
  return next();
});

// catch 404 and forward to error handler
app.use((_, res) => {
  const response = new Response(res);

  return response.apiNotFound();
});

export default app;
