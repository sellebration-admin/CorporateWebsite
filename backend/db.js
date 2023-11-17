import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();
export const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database!");
});

db.on("error", (err) => {
  console.error("Database connection error:", err);
});
