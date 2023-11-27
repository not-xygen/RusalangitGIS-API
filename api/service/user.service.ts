import pool from "../utils/database";

export async function getAllUsers() {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetAllUsers()");
  connection.release();
  return datas;
}

export async function getUserByUid(user_id: string) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query(
    "SELECT * FROM users WHERE user_id = ?",
    [user_id],
  );
  connection.release();
  return datas;
}

export async function getUserById(user_id: string) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetUserById(?)", [user_id]);
  connection.release();
  return datas;
}

export async function createUser(
  username: string,
  hashed_password: string,
  fullname: string,
  role_id: number,
) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL CreateUser(?, ?, ?, ?)", [
    username,
    hashed_password,
    fullname,
    role_id,
  ]);
  connection.release();
  return datas;
}

export async function updateUserById(
  user_id: number,
  username: string,
  hashed_password: string,
  fullname: string,
  role_id: number,
) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL UpdateUserByID(?, ?, ?, ?, ?)", [
    user_id,
    username,
    hashed_password,
    fullname,
    role_id,
  ]);
  connection.release();
  return datas;
}

export async function deleteUserById(user_id: number) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL 	DeleteUserByID(?)", [user_id]);
  connection.release();
  return datas;
}
