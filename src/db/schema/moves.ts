import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"
import playbooks from "./playbooks"

const moves = pgTable("moves", {
  id: serial("id").primaryKey(),
  move: text("move").notNull(),
  description: text("description").notNull(),
  options: text("options").array(),
  negativeOutcome: text("negative_outcome"),
  playbookId: integer("playbook_id")
    .references(() => playbooks.id)
    .notNull(),
})

export default moves
