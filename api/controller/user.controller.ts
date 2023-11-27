import { Request, Response } from "express";
import * as userService from "../service/user.service";
import pool from "../utils/database";

export async function getUsersHandler(req: Request, res: Response) {
  const { uid } = req.query;

  try {
    let datas;

    if (uid && typeof uid === "string") {
      // If roleId is provided, filter locations by roleId
      datas = await userService.getUserByUid(uid);
    } else {
      // Otherwise, get all locations
      datas = await userService.getAllUsers();
    }

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
  const { id } = req.params;

  try {
    const datas = await userService.getUserById(id);
    res.status(200).json({
      status: 200,
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
  const { username, hashed_password, fullname, role_id } = req.body;

  try {
    if (!username || !hashed_password || !fullname || !role_id) {
      return res.status(400).json({
        status: 400,
        message: "Missing required parameters",
      });
    }

    await userService.createUser(username, hashed_password, fullname, role_id);
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
  const { id } = req.params;
  const { username, hashed_password, fullname, role_id } = req.body;

  const user_id = parseInt(id);

  try {
    const datas = await userService.updateUserById(
      user_id,
      username,
      hashed_password,
      fullname,
      role_id,
    );
    res.status(201).json({
      status: 201,
      message: "Successfully PUT User by ID",
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
  const { id } = req.params;

  const user_id = parseInt(id);

  try {
    const datas = await userService.deleteUserById(user_id);
    res.status(201).json({
      status: 201,
      message: "Successfully DELETE User by ID",
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
