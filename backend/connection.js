import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testa a conexão ao iniciar
db.getConnection()
  .then(conn => {
    console.log('\n Conexão com o banco de dados estabelecida com sucesso! \n');
    conn.release();
  })
  .catch(err => {
    console.error('\n Erro ao conectar ao banco de dados:', err.message, '\n');
  });

export default db;