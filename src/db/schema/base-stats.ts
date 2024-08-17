import { type InferSelectModel } from "drizzle-orm"
import { integer, pgTable, serial } from "drizzle-orm/pg-core"

export const baseStats = pgTable("base_stats", {
  id: serial("id").primaryKey(),
  creativity: integer("creativity"),
  focus: integer("focus"),
  harmony: integer("harmony"),
  passion: integer("passion"),
})
