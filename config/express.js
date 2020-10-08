import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import formData from 'express-form-data';
import Response from '../server/class/util/response.class';
import route from '../server/routes';
import constant from './constant';

require('dotenv').config();

const app = express();

const baseUrl = constant.BASE_URL;

app.use(cors({
  preflightContinue: true,
  methods: constant.CORS_METHOD,
  origin: constant.CORS_ORIGIN,
  allowedHeaders: constant.CORS_HEADERS,
}));

app.use((req, res, next) => {
  if (req.headers.toLowerCase() === constant.OPTION_METHOD) {
    return res.send('OK');
  }
  return next();
});

const options = {
  uploadDir: constant.UPLOAD_MEDIA_FOLDER,
  autoClean: true,
};

app.use((req, res, next) => {
  if (!fs.existsSync(constant.UPLOAD_MEDIA_FOLDER)) {
    fs.mkdirSync(constant.UPLOAD_MEDIA_FOLDER);
  }
  return next();
});

// parse data with connect-multiparty.
app.use(formData.parse(options));
// delete from the request all empty files (size == 0)
app.use(formData.format());
// change the file objects to fs.ReadStream
app.use(formData.stream());
// union the body and the files
app.use(formData.union());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(baseUrl, route);

app.use((err, req, res, next) => {
  console.info(err);

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
