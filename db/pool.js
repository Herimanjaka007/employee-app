import { config } from "dotenv";
import pg from "pg";

config();

const { Pool } = pg;
const { env } = process;

export default new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
});