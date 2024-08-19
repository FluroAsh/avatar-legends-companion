import { type InferSelectModel } from "drizzle-orm"
import { pgTable, serial, text, boolean, integer } from "drizzle-orm/pg-core"

// // TODO: Need to normalize this table for each subclass...
const subclasses = pgTable("subclasses", {
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

export default subclasses
