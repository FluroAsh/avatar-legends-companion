import { integer, pgTable, serial } from "drizzle-orm/pg-core"

const baseStats = pgTable("base_stats", {
  id: serial("id").primaryKey(),
  creativity: integer("creativity"),
  focus: integer("focus"),
  harmony: integer("harmony"),
  passion: integer("passion"),
})

export type SelectBaseStats = typeof baseStats.$inferSelect

export default baseStats
