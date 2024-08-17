import { type InferSelectModel } from "drizzle-orm"
import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core"

// // TODO: Need to normalize this table for each subclass...
export const subclasses = pgTable("playbook_subclasses", {
  id: serial("id").primaryKey(),
  // Common fields
  name: text("name").notNull(),
  targetPlayer: boolean("target_player").notNull(),
  Description: text("description").notNull(),
  options: text("options").array(),
  // un-normalized fields
  // track
  // signs
  // - name
  // - description
})
