// env.ts
import { z } from "zod";

const envSchema = z.object({
  YOUTUBE_API_KEY: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  YOUTUBE_API_BASE_URL: z.string(),
});

const env = envSchema.parse({
  YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  NODE_ENV: process.env.NODE_ENV,
  YOUTUBE_API_BASE_URL: process.env.YOUTUBE_API_BASE_URL,
});

export default env;
