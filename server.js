import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import investmentRoutes from './routes/investmentRoutes'; // Importando as rotas

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para entender JSON
app.use(cors()); // Middleware para permitir requisições de diferentes origens

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar:", err));
                                                                                            

app.use("/api", investmentRoutes);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
