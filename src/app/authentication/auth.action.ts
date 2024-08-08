"use server";

import { prisma } from "@/lib/prisma";
import { signUpSchema } from "@/lib/schema";
import { z } from "zod";

import { Argon2id } from "oslo/password";

export const signUp = async (value: z.infer<typeof signUpSchema>) => {
  try {
    //if user already exists, throws an error
    const existingUser = await prisma.user.findUnique({
      where: {
        email: value.email,
      },
    });
    if (existingUser) {
      return { error: "User already exist", success: false };
    }

    //create user
    const hashedPassword = await new Argon2id().hash(value.password);

    const user = await primsa.user.create({
      email: value.email.toLowerCase(),
      name: value.name,
      hashedPassword,
    });
  } catch (error) {}
};
