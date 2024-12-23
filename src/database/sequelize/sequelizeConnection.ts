import { Sequelize } from 'sequelize';
import { DatabaseConnection } from '../databaseConnection.ts';
import { DBConfig, ConnectionDetails } from '../../../config/config.d.ts';
import dbConfig from '../../../config/config.js';
export class SequelizeConnection implements DatabaseConnection {
  private sequelize;
  constructor() {
    const env: keyof DBConfig =
      (Deno.env.get('ENV') as keyof DBConfig) ?? 'development';
    const config: ConnectionDetails = dbConfig[env];

    this.sequelize = new Sequelize(config);
  }
  async connect(): Promise<Sequelize> {
    await this.sequelize.authenticate();
    return this.sequelize;
  }
}
