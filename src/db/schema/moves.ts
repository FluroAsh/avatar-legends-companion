import { type InferSelectModel } from "drizzle-orm"
import { integer, pgTable, serial, text, boolean } from "drizzle-orm/pg-core"

export const moves = pgTable("moves", {
  id: serial("id").primaryKey(),
  move: text("move").notNull(),
  description: text("description").notNull(),
  options: text("options").array(),
  negativeOutcome: text("negative_outcome"),
})
