import { relations } from "drizzle-orm"
import { pgTable, serial, text, boolean, integer } from "drizzle-orm/pg-core"

const subclasses = pgTable("subclasses", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  targetPlayer: boolean("target_player").notNull(),
  targetName: text("target_name"),
  description: text("description").notNull(),
  description2: text("description2"),
  options: text("options").array(),
  negativeOutcome: text("negative_outcome"),
})

export const subclassSpecials = pgTable("subclass_specials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  options: text("options").array(),
  subclassId: integer("subclass_id")
    .references(() => subclasses.id)
    .notNull(),
})

export const subclassRelations = relations(subclasses, ({ many }) => ({
  specials: many(subclassSpecials),
}))

export type SelectSubclasses = typeof subclasses.$inferSelect
export type SelectSubclassSpecials = typeof subclassSpecials.$inferSelect

export default subclasses
