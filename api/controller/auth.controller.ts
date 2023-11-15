import bcrypt from "bcrypt";
import * as userService from "../service/user.service";
import { Request, Response } from "express";
import { generateToken } from "../service/auth.service";

export async function loginUserHandler(req: Request, res: Response) {
  const { user_id, password } = req.body;

  try {
    const user = await userService.getUserById(user_id);

    if (user.length === 0) {
      return res.status(401).json({
        status: 401,
        message: "Invalid credentials",
      });
    }

    const hashedPassword = user[0].password; // Assuming password is stored in DB

    // Compare hashed password with provided password
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 401,
        message: "Invalid credentials",
      });
    }

    // Generate and send JWT token on successful authentication
    const token = generateToken(user[0].user_id); // Example function to generate token
    res.status(200).json({
      status: 200,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
