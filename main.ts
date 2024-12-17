import { Application, Router } from '@oak/oak';
import { BaseController } from './baseController.ts';
import UserController from './src/controller/userController.ts';
const baseController = new BaseController();
const userController = new UserController();

const router = new Router();

router.get('/', (ctx) => {
  baseController.ok(ctx, 'Hello world');
});
router.get('/user', userController.getAllUsers);
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 5001, hostname: 'localhost' });
