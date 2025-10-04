process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import { Pool } from "pg";

const dbConnect = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export { dbConnect };
