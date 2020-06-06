import connection from './src/database/connection';

export default async () => {
  await connection.create();
};
