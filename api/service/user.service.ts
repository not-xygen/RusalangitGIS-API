import pool from "../utils/database";

export async function getAllUsers() {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetAllUsers()");
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
  user_id: string,
  user_name: string,
  user_desc: string,
  latitude: number,
  longitude: number,
) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL CreateUser(?, ?, ?, ?, ?)", [
    user_id,
    user_name,
    user_desc,
    latitude,
    longitude,
  ]);
  connection.release();
  return datas;
}

export async function updateUserById(
  user_id: string,
  user_name: string,
  user_desc: string,
  latitude: number,
  longitude: number,
) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetUserById(?, ?, ?, ?, ?)", [
    user_id,
    user_name,
    user_desc,
    latitude,
    longitude,
  ]);
  connection.release();
  return datas;
}

export async function deleteUserById(user_id: string) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetUserById(?)", [user_id]);
  connection.release();
  return datas;
}
