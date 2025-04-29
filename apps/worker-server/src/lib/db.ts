import { PrismaClient } from "@repo/db";
import IORedis from "ioredis";
export const db: PrismaClient = new PrismaClient();

export const redisConnection = new IORedis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});
