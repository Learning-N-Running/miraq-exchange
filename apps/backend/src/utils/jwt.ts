import jwt, { Secret } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const EXPIRES_IN = "7d";

export const signJwt = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET!, { expiresIn: EXPIRES_IN });
};

export const verifyJwt = (token: string): null | jwt.JwtPayload => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as Secret);
    return decoded as jwt.JwtPayload;
  } catch (error) {
    return null;
  }
};
