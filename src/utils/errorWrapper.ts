import { Context, Next } from '@oak/oak';

export const wrapAsync = (
  fn: (ctx: Context, next: Next) => Promise<void | Error>
) => {
  return async (ctx: Context, next: Next) => {
    try {
      await fn(ctx, next);
    } catch (error: any) {
      console.error(error); // Log the error

      ctx.throw(error.status || 500, error.message || 'Internal Server Error');
    }
  };
};
