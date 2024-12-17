import { Sequelize } from 'sequelize';
import { DatabaseConnection } from '../databaseConnection.ts';

export class SequelizeConnection implements DatabaseConnection {
  private sequelize;
  constructor() {
    const dbPort = Deno.env.get('DB_PORT') ?? '5432';

    this.sequelize = new Sequelize({
      username: Deno.env.get('DB_USER'),
      dialect: 'postgres',
      password: Deno.env.get('DB_PASSWORD'),
      port: parseInt(dbPort),
      host: Deno.env.get('DB_HOST'),
      database: Deno.env.get('DB_NAME'),
    });
  }
  async connect(): Promise<Sequelize> {
    await this.sequelize.authenticate();
    return this.sequelize;
  }
}
