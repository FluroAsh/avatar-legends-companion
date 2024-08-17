import { type InferSelectModel } from "drizzle-orm"
import { integer, pgTable, serial, text, boolean } from "drizzle-orm/pg-core"

import { techniques } from "./techniques"
import { subclasses } from "./subclasses"
import { moves } from "./moves"
import { baseStats } from "./base-stats"

export const playbooks = pgTable("playbooks", {
  id: serial("id").primaryKey(),
  playbook: text("playbook").notNull(),
  prebuilt: boolean("prebuilt").notNull(),
  // base stats
  demeanours: text("demeanours").array().notNull(),
  balance: text("balance").array().notNull(),
  // subclass
  techniqueId: integer("technique_id")
    .references(() => techniques.id)
    .notNull(),
  // moves
  // history
  // connections
  // momentOfBalance
  // growthQuestion
})

// ---- 🔗 Join tables ---- //
export const playbookTechniquesTable = pgTable("playbook_techniques", {
  id: serial("id").primaryKey(),
  playbookId: integer("playbook_id")
    .references(() => playbooks.id)
    .notNull(),
  techniqueId: integer("technique_id")
    .references(() => techniques.id)
    .notNull(),
})

export const playbookSubclassesTable = pgTable("playbook_subclasses", {
  id: serial("id").primaryKey(),
  playbookId: integer("playbook_id")
    .references(() => playbooks.id)
    .notNull(),
  subclassId: integer("subclass_id")
    .references(() => subclasses.id)
    .notNull(),
})

export const playbookMovesTable = pgTable("playbook_moves", {
  id: serial("id").primaryKey(),
  playbookId: integer("playbook_id")
    .references(() => playbooks.id, { onDelete: "cascade" })
    .notNull(),
  moveId: integer("move_id")
    .references(() => moves.id)
    .notNull(),
})

export const playbookBaseStatsTable = pgTable("playbook_base_stats", {
  id: serial("id").primaryKey(),
  playbookId: integer("playbook_id")
    .references(() => playbooks.id)
    .notNull(),
  baseStatsId: integer("base_stats_id")
    .references(() => baseStats.id)
    .notNull(),
})

export type SelectPlaybook = typeof playbooks.$inferSelect
