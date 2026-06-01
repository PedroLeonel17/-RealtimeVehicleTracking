import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ path: '.env' });

const PORT =  process.env.NODE_ENV === "development" ? process.env.PORT_TEST : process.env.PORT_PROD;

console.log(`Servidor rodando na porta ${PORT}, link: http://localhost:${PORT}`);

app.listen(PORT)