import express from 'express';
import db from './connection.js';
import getLocaisAtendimento from './functions/getLocaisAtendimento.js';
import getEspecialidades from './functions/getespecialidades.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('Servidor Backend Rodando');
});


router.get('/LocaisAtendimento', async (req, res) => {
  try {
    const response = await getLocaisAtendimento(db);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar locais de atendimento' });
  }
});


router.get('/Especialidades', async (req, res) => {
  try {
    const response = await getEspecialidades(db);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar locais de atendimento' });
  }
});






router.post('/NovoAtendimento', async (req, res) => {
  const formData = req.body;
  try {
    const response = await postNovoAtendimento(db, formData);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar locais de atendimento' });
  }
});


export default router;