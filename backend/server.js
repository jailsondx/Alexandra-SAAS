import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router.js';

dotenv.config();

const app = express();
app.use(cors());  // Permite CORS para frontend local
app.use(express.json());

// Usa as rotas
app.use('/api', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});