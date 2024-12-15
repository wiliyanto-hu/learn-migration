import { Sequelize } from 'sequelize';
import { DatabaseConnection } from '../databaseConnection.ts';

export class SequelizeConnection implements DatabaseConnection {
  private sequelize;
  constructor() {
    this.sequelize = new Sequelize({
      username: Deno.env.get('DB_USER'),
      dialect: 'mysql',
      password: Deno.env.get('DB_PASSWORD'),
      port: Deno.env.get('DB_PORT'),
      host: Deno.env.get('DB_HOST'),
      database: 'blog_post_db',
    });
  }
  async connect(): Promise<object> {
    await this.sequelize.authenticate();
    return this.sequelize;
  }
}
