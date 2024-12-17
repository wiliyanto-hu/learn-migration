import { Context } from '@oak/oak';
import { BaseController } from '../../baseController.ts';
import User from '../services/userService.ts';
import { wrapAsync } from '../utils/errorWrapper.ts';
class UserController extends BaseController {
  private userService;
  constructor() {
    super();
    this.userService = new User();
  }

  getAllUsers = wrapAsync(async (ctx: Context) => {
    return this.ok(
      ctx,
      'User fetched successfully',
      await this.userService.getAllUsers()
    );
  });
}

export default UserController;
