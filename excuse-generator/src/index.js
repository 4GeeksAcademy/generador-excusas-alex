// Este archivo es el punto de entrada de la aplicación. Aquí se inicializa la aplicación y se configuran las rutas o la lógica principal para generar excusas.

import express from 'express';
import { getExcuse } from './utils/excuses.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/excuse', (req, res) => {
    const excuse = getExcuse();
    res.json({ excuse });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});