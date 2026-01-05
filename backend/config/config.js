import load_dotenv from 'dotenv';

// Import de configuraciones de variables de entorno
load_dotenv.config();

export const {
    PORT,
    DATABASE_URL,
    JWT_SECRET,
    SALT_ROUNDS
} = process.env;