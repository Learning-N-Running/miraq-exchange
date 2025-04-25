import { Request, Response } from "express";
import prisma from "../prisma/client";
import bcrypt from "bcrypt";
import { signJwt } from "../utils/jwt";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: "Email already registered." });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = signJwt({ userId: user.id });
    res.status(201).json({ token });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email and Password is required." });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password!);
    if (!isPasswordCorrect) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    const token = signJwt({ userId: user.id });
    res.status(200).json({ token });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const getMe = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user?.userId;

  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, createdAt: true },
  });
  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }
  res.status(200).json({ user });
};
