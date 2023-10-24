import express, { Request, Response } from "express";
import pool from "./database";

const app = express();

app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query("CALL GetAllUser()");
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:3000`),
);
