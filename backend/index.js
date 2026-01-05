import express from 'express';
import { PORT } from './config/config.js';

// inicialización de la aplicación Express
const app = express();


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})