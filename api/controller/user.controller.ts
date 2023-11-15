import { Request, Response } from "express";
import * as userService from "../service/user.service";
import pool from "../utils/database";

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const datas = await userService.getAllUsers();
    res.status(200).json({
      status: 200,
      message: "Successfully GET Users",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function getUserByIdHandler(req: Request, res: Response) {
  const { user_id } = req.params;

  try {
    const datas = await userService.getUserById(user_id);
    res.status(201).json({
      status: 201,
      message: "Successfully GET User by ID",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

export async function createUserHandler(req: Request, res: Response) {
  const { user_id, user_name, user_desc, latitude, longitude } = req.body;

  try {
    if (!user_id || !user_name || !user_desc || !latitude || !longitude) {
      return res.status(400).json({
        status: 400,
        message: "Missing required parameters",
      });
    }

    
    res.status(201).json({
      status: 201,
      message: "Successfully POST User",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

// TODO: Update
export async function updateUserByIdHandler(req: Request, res: Response) {
  const { user_id } = req.params;

  try {
    const connection = await pool.getConnection();
    const [datas] = await connection.query("CALL GetUserById(?)", [user_id]);
    connection.release();
    res.status(201).json({
      status: 201,
      message: "Succesfully UPDATE User by ID",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

// TODO: Delete
export async function deleteUserByIdHandler(req: Request, res: Response) {
  const { user_id } = req.params;

  try {
    const connection = await pool.getConnection();
    const [datas] = await connection.query("CALL GetUserById(?)", [user_id]);
    connection.release();
    res.status(201).json({
      status: 201,
      message: "Succesfully DELETE User by ID",
      data: datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
