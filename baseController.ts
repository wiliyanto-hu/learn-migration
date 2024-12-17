import { Context } from '@oak/oak';
import { HTTP_STATUS } from './src/constant/HttpStatus.ts';

export class BaseController {
  ok(ctx: Context, message: string, data = {}): void {
    ctx.response.status = HTTP_STATUS.OK;
    ctx.response.body = {
      message,
      data,
    };
  }
  notFound(ctx: Context, message: string = 'Not found'): void {
    ctx.response.status = HTTP_STATUS.NOT_FOUND;
    ctx.response.body = {
      message,
    };
  }
  badRequest(ctx: Context, message: string, data = {}): void {
    ctx.response.status = HTTP_STATUS.BAD_REQUEST;
    ctx.response.body = {
      message,
      data,
    };
  }
  unauthorized(ctx: Context, message: string = 'Unautohrized'): void {
    ctx.response.status = HTTP_STATUS.UNAUTHORIZED;
    ctx.response.body = {
      message,
    };
  }
}
