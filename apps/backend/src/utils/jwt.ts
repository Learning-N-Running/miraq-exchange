import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = "7d";

export const signJwt = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET!, { expiresIn: EXPIRES_IN });
};
