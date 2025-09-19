import express from 'express';
import pool from './connection.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Servidor Backend Rodando');
});

// Rota de teste: GET /api/test
router.get('/test', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS test');  // Query simples para testar conexão
    res.json({ message: 'Conexão com BD ok!', data: rows });
  } catch (error) {
    res.status(500).json({ error: 'Erro na conexão com BD' });
  }
});

export default router;