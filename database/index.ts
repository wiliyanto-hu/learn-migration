import { SequelizeConnection } from './sequelize/sequelizeConnection.ts';

export default await new SequelizeConnection().connect();
