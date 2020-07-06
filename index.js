import app from './config/express';

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`); // eslint-disable-line no-console
});
