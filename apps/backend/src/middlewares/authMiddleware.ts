import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwt";

interface AuthenticateRequest extends Request {
  user?: { userId: string };
}

export const requireAuth = (
  req: AuthenticateRequest,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ error: "Authorization header missing and invalid." });
    return;
  }
  const token = authHeader.split(" ")[1];
  const payload = verifyJwt(token);

  if (!payload || typeof payload !== "object" || !("userId" in payload)) {
    res.status(401).json({ error: "Invalid or expired token." });
    return;
  }

  req.user = { userId: payload.userId };
  next();
};
