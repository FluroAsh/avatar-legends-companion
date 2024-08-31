import * as path from "path"
import * as fs from "fs"
import { fileURLToPath } from "url"
import { getTableName, sql, Table } from "drizzle-orm"

import type { Playbook, Technique } from "@/types/api"
import { Db, db } from "@/db"
import * as schema from "@/db/schema"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.resolve(__dirname, "data")

const techniqueFiles = fs.readdirSync(dataDir + "/techniques")
const playbookFiles = fs.readdirSync(dataDir + "/playbooks")

async function resetTable(db: Db, table: Table) {
  await db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE;`)
  )
}

function getData<T>(fileName: string, dirName: "techniques" | "playbooks"): T {
  const data = fs.readFileSync(`${dataDir}/${dirName}/${fileName}`, "utf-8")
  return JSON.parse(data)
}

async function seed() {
  for (const table of [
    schema.playbooks,
    schema.playbookTechniques,
    schema.techniques,
    schema.moves,
    schema.baseStats,
    schema.subclasses,
  ]) {
    await resetTable(db, table)
  }

  console.log("> 🗑️  Tables have been reset.")

  for (const techniqueFile of techniqueFiles) {
    const data = getData<Technique[]>(techniqueFile, "techniques")
    await db.insert(schema.techniques).values(data as any)
    console.log(
      `Inserted (${data.length}) techniques into the "techniques" table`
    )
  }

  let i = 0

  for (const playbookFile of playbookFiles) {
    const data = getData<Playbook>(playbookFile, "playbooks")

    // -- Base Stats -- //
    const { creativity, focus, harmony, passion } = data.baseStats

    await db
      .insert(schema.baseStats)
      .values({ creativity, focus, harmony, passion })

    // -- Subclasses -- //
    const specials = data.subclass.specials
    const {
      name,
      targetPlayer,
      targetName,
      description,
      description2,
      options,
      negativeOutcome,
    } = data.subclass

    await db.transaction(async (trx) => {
      await trx.insert(schema.subclasses).values({
        name,
        targetPlayer,
        targetName,
        description,
        description2,
        options,
        negativeOutcome,
      })

      if (!specials) return

      // -- Subclass Specials -- //
      for (const special of specials) {
        await trx.insert(schema.subclassSpecials).values({
          name: special.name,
          description: special.description,
          options: special.options,
          subclassId: i + 1,
        })
      }
    })

    // -- Playbooks -- //
    const {
      playbook,
      demeanours,
      balance,
      history,
      connections,
      momentOfBalance,
      growthQuestion,
      startingTechnique,
      moves,
    } = data

    await db.transaction(async (trx) => {
      await trx.insert(schema.playbookTechniques).values({
        name: startingTechnique.name,
        description: startingTechnique.description,
        stance: startingTechnique.stance,
      })

      await trx.insert(schema.playbooks).values({
        playbook,
        demeanours,
        balance,
        history,
        connections,
        momentOfBalance,
        growthQuestion,
        baseStatsId: i + 1,
        subclassId: i + 1,
        playbookTechniqueId: i + 1,
      })
    })

    // -- Moves -- //
    await db.transaction(async (trx) => {
      for (const move of moves) {
        await trx.insert(schema.moves).values({
          move: move.move,
          description: move.description,
          options: move.options,
          playbookId: i + 1,
        })
      }
    })

    i++
  }

  process.exit(0)
}

seed()
