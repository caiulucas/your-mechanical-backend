import app from './app';
import connection from './database/connection';

connection.create();

app.listen(process.env.PORT || 3333);
