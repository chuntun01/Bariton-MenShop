import { Pool } from "pg";

const dbConnect = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
    rejectUnauthorized: false, // bỏ kiểm tra chứng chỉ tự ký
  },
});

export { dbConnect };
