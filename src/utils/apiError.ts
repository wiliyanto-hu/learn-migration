import HTTP_STATUS from '../constant/HttpStatus.ts';
// Javascript Error with status enabled
export class ApiError extends Error {
  statusCode;
  status;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.status =
      statusCode >= 400 && statusCode < 500
        ? HTTP_STATUS.BAD_REQUEST
        : HTTP_STATUS.ERROR;

    Error.captureStackTrace(this, this.constructor);
  }
}
