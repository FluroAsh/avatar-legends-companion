import { config } from "dotenv"
import { type Config, defineConfig } from "drizzle-kit"

config({ path: ".env.local" })

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not defined.")
}

console.log("DB_URL", process.env.DB_URL)

export default defineConfig({
  schema: "./src/db/schema",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL!,
  },
}) satisfies Config
