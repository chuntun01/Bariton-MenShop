import { Pool } from "pg";

const dbConnect = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Bỏ kiểm tra chứng chỉ tự ký
  },
});

export { dbConnect };
