import { Application, Router } from '@oak/oak';
import { BaseController } from './baseController.ts';
import db from './database/index.ts';
import User from './database/models/user.ts';
const baseController = new BaseController();

const router = new Router();

router.get('/', (ctx) => {
  baseController.ok(ctx, 'Hello world');
});
router.get('/user', async (ctx) => {
  baseController.ok(ctx, 'OK', await User.findAll());
});
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 5000, hostname: 'localhost' });
