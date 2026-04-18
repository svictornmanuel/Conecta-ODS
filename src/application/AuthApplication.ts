import jwt from "jsonwebtoken";

const JWT_SECRET = "jprdnd12jprdnd12jprdnd12";

export class AuthApplication {
  static generateToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  }

  static verifyToken(token: string): any {
    return jwt.verify(token, JWT_SECRET);
  }
}
