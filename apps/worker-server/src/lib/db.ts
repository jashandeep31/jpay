import { PrismaClient } from "@repo/db";
import { Redis } from "ioredis";
export const db: PrismaClient = new PrismaClient();

export const redisConnection = new Redis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});
