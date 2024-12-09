import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  CreationOptional,
} from 'sequelize';
import sequelize from '../index.ts';

export default class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<string>;
  declare first_name: string;
  declare last_name: string;
}

User.init(
  {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUIDV4,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'user_profile',
    sequelize,
    timestamps: false,
  }
);

//TODO: sequelize cannot false / import directly from library? / How to use existing ?
//TODO: Test create user
