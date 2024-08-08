// THIS FILE ALLOW TO INTERACT WITH PRISMA DATABASE

import { PrismaClient } from "@prisma/client/extension";

const client = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
});

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? client;

if (process.env.NODE_ENV === "production") globalForPrisma.prisma = client;
