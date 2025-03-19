import express from 'express';
const router = express.Router();

// Rota de exemplo para investimentos
router.get('/investments', (req, res) => {
  res.send("Aqui estão seus investimentos!");
});

export default router; // Exportando a rota


