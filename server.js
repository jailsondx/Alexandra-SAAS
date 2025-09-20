import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router.js';
import db from './connection.js';

dotenv.config();

// Inicializa Conexao com o BD
db;

const app = express();
app.use(cors());  // Permite CORS para frontend local
app.use(express.json());

// Usa as rotas
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta 5000`);
});


export default app; // Exporta para Vercel Serverless