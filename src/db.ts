import { Pool } from "pg";

const dbConnect = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // cần thiết khi deploy lên Vercel hoặc dùng Supabase
  },
});

export { dbConnect };
