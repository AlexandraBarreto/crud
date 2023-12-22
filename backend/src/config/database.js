const myql2 = require('mysql2');

const database = myql2.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'login',
});

module.exports = database;
