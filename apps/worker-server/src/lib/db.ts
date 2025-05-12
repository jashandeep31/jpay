import { PrismaClient } from "@repo/db";
import { Redis } from "ioredis";
import { env } from "./env.js";
export const db: PrismaClient = new PrismaClient();

export const redisConnection = new Redis({
  host: env.REDIS_HOST,
  port: parseInt(env.REDIS_PORT),
  maxRetriesPerRequest: null,
});
