import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY as string;

export function generateToken(userId: string): string {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour, modify as needed
  return token;
}

export function verifyToken(token: string): any {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
}
