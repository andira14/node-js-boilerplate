export default {
  BASE_URL: '/api',

  CORS_METHOD: 'GET,PUT,POST,DELETE',
  CORS_ORIGIN: '*',
  CORS_HEADERS: 'Content-Type, Origin, Authorization, Accept',
  OPTION_METHOD: 'OPTIONS',

  UPLOAD_MEDIA_FOLDER: `${__dirname}/../upload_media`,
};
