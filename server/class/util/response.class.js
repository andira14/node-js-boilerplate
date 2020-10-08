require('dotenv').config();

class Response {
  constructor(res) {
    this.res = res;
    this.statusOk = 200;
    this.statusCreated = 201;
    this.statusBadRequest = 400;
    this.statusForbidden = 403;
    this.statusNotFound = 404;
    this.statusInternalServerError = 500
  }

  contentSuccess(code, response) {
    this.res.status(code).json({
      code,
      response,
    });
  }

  contentFail(code, errorMessage, errorCode) {
    this.res.status(code).json({
      code,
      error: {
        error_code: errorCode,
        message: errorMessage,
      },
    });
  }

  systemError(stack) {
    this.res.status(500).json({
      code: 500,
      error: {
        error_code: 'GE001',
        message: 'System error',
      },
      stack: process.env.NODE_ENV === 'development' ? stack : undefined,
    });
  }

  apiNotFound() {
    this.res.status(404).json({
      code: 404,
      error: {
        error_code: 'GE002',
        message: 'API not found',
      },
    });
  }
}

export default Response;
