import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({ path: '.env' });

const PORT =  process.env.NODE_ENV === "development" ? process.env.PORT_TEST : process.env.PORT;

console.log(`Servidor rodando na porta ${PORT}, link: http://localhost:${PORT}`);

app.listen({
    host: '0.0.0.0',
    port: PORT
})