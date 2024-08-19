import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text, boolean } from "drizzle-orm/pg-core"

import baseStats from "./base-stats"
import moves from "./moves"
import subclasses from "./subclasses"

const playbooks = pgTable("playbooks", {
  id: serial("id").primaryKey(),
  playbook: text("playbook").notNull(),
  demeanours: text("demeanours").array().notNull(),
  balance: text("balance").array().notNull(),
  history: text("history").array().notNull(),
  connections: text("connections").array().notNull(),
  momentOfBalance: text("moment_of_balance").notNull(),
  growthQuestion: text("growth_question").notNull(),
  subclassId: integer("subclass_id")
    .references(() => subclasses.id)
    .notNull(),
  techniqueId: integer("technique_id")
    .references(() => playbookTechniques.id)
    .notNull(),
  baseStatsId: integer("base_stats_id")
    .references(() => baseStats.id)
    .notNull(),
})

export const playbookTechniques = pgTable("playbook_techniques", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  stance: text("stance").notNull(),
})

export const playbookRelations = relations(playbooks, ({ one, many }) => ({
  subclass: one(subclasses, {
    fields: [playbooks.subclassId],
    references: [subclasses.id],
  }),
  technique: one(playbookTechniques, {
    fields: [playbooks.techniqueId],
    references: [playbookTechniques.id],
  }),
  baseStats: one(baseStats, {
    fields: [playbooks.baseStatsId],
    references: [baseStats.id],
  }),
  moves: many(moves),
}))

export type SelectPlaybook = typeof playbooks.$inferSelect

export default playbooks
