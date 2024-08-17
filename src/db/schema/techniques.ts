import { type InferSelectModel } from "drizzle-orm"
import { integer, pgTable, serial, text, boolean } from "drizzle-orm/pg-core"
import { playbooks } from "./playbooks"

export const techniques = pgTable("techniques", {
  id: serial("id").primaryKey(),
  technique: text("technique").notNull(),
  stance: text("stance").notNull(),
  rare: boolean("rare").notNull(),
  type: text("type").notNull(),
  base: text("base").notNull(),
  description: text("description").notNull(),
})



export type Technique = InferSelectModel<typeof techniques>
