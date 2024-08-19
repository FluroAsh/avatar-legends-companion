import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

config({ path: ".env.local" })

const client = postgres(process.env.DB_URL!, {
  max: 1,
  onnotice: () => {}, // Prevent console spam when truncating tables
})
export const db = drizzle(client)

export type Db = typeof db
