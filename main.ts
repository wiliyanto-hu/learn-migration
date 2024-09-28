import { Application, Router } from '@oak/oak';
import { BaseController } from './baseController.ts';
const baseController = new BaseController();

const router = new Router();

router.get('/', (ctx) => {
  baseController.ok(ctx, 'Hello world');
});
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 5000, hostname: 'localhost' });
