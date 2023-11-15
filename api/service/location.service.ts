import pool from "../utils/database";

export async function getAllLocations() {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetAllLocations()");
  connection.release();
  return datas;
}

export async function getLocationById(locationId: string) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetLocationById(?)", [
    locationId,
  ]);
  connection.release();
  return datas;
}

export async function createLocation(
  user_id: string,
  location_name: string,
  location_desc: string,
  latitude: number,
  longitude: number,
) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL CreateLocation(?, ?, ?, ?, ?)", [
    user_id,
    location_name,
    location_desc,
    latitude,
    longitude,
  ]);
  connection.release();
  return datas;
}

export async function updateLocationById(
  location_id: string,
  user_id: string,
  location_name: string,
  location_desc: string,
  latitude: number,
  longitude: number,
) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetLocationById(?)", [
    location_id,
    user_id,
    location_name,
    location_desc,
    latitude,
    longitude,
  ]);
  connection.release();
  return datas;
}

export async function deleteLocationById(location_id: string) {
  const connection = await pool.getConnection();
  const [datas] = await connection.query("CALL GetLocationById(?)", [
    location_id,
  ]);
  connection.release();
  return datas;
}