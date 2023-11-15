import { Request, Response, NextFunction } from "express";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.session.userId) {
    // User is authenticated, proceed to the next middleware or route
    next();
  } else {
    // User is not authenticated, handle accordingly (e.g., redirect to login)
    res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }
}
