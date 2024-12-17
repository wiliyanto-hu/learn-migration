import UserModel from '../database/models/user.ts';

class User {
  async getAllUsers() {
    return await UserModel.findAll();
  }
}

export default User;
