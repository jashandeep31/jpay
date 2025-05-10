import { PrismaClient } from "@repo/db";
import IORedis from "ioredis";

export const db = new PrismaClient();
export const redisConnection = new IORedis({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT || "6379"),
  maxRetriesPerRequest: null,
});
