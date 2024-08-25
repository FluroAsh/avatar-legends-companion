"use server"

import { eq, ilike, sql } from "drizzle-orm"

import type { Move } from "@/types/api"
import { db } from "@/db"
import {
  baseStats,
  moves,
  playbooks,
  subclasses,
  techniques,
} from "@/db/schema"

export type PlaybookQueryByName = Awaited<
  ReturnType<typeof fetchPlaybookByParam>
>

export const fetchPlaybookByParam = async (param: string) =>
  await db
    .select({
      playbook: playbooks,
      baseStats,
      subclasses,
      techniques,
      moves: sql<Move>`json_agg(moves.*)`.as("moves"),
    })
    .from(playbooks)
    .innerJoin(baseStats, eq(playbooks.baseStatsId, baseStats.id))
    .innerJoin(subclasses, eq(playbooks.subclassId, subclasses.id))
    .innerJoin(techniques, eq(playbooks.techniqueId, techniques.id))
    .innerJoin(moves, eq(playbooks.id, moves.playbookId))
    // %{param}% is a required wildcard search as the playbook will begin with "The "
    .where(ilike(playbooks.playbook, `%${param}%`))
    .groupBy(playbooks.id, baseStats.id, subclasses.id, techniques.id)

export const fetchTechniquesByParam = async (param: string) =>
  await db.select().from(techniques).where(ilike(techniques.base, param))
