export interface DatabaseConnection {
  connect(): Promise<object>;
}
