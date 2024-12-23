export type ConnectionDetails = {
  username: string | undefined;
  dialect: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  port: string | undefined;
};

export type DBConfig = {
  development: ConnectionDetails;
  test: ConnectionDetails;
  production: ConnectionDetails;
};
