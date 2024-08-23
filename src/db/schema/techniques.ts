import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core"

const techniques = pgTable("techniques", {
  id: serial("id").primaryKey(),
  technique: text("technique").notNull(),
  stance: text("stance").notNull(),
  rare: boolean("rare").notNull(),
  type: text("type").notNull(),
  base: text("base").notNull(),
  description: text("description").notNull(),
})

export type SelectTechnique = typeof techniques.$inferSelect

export default techniques
