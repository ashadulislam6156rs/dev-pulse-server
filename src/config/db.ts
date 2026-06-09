import { Pool } from "pg"
import { config } from "./dotenv";

const pool = new Pool({
    connectionString: config.connection_string,
});

export const initDB = async () => {
    try {
        await pool.connect();
        console.log("DevPulse Database Connected");
    } catch (error) {
        console.error("DevPulse Database Connection Failed:", error);
    }
};

export default pool;

