import * as path from "path"
import * as fs from "fs"
import { fileURLToPath } from "url"
import { getTableName, sql, Table } from "drizzle-orm"

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

for (const table of [
  schema.playbooks,
  schema.techniques,
  schema.moves,
  schema.baseStats,
  schema.subclasses,
]) {
  await resetTable(db, table)
}

console.log("> 🗑️  Tables have been reset.")

// Insert data into the techniques table
for (const techniqueFile of techniqueFiles) {
  const data = getData<Omit<schema.SelectTechnique, "id">[]>(
    techniqueFile,
    "techniques"
  )
  await db.insert(schema.techniques).values(data as any)
  console.log(
    `Inserted (${data.length}) techniques into the "techniques" table`
  )
}

// TODO: Set up other tables...
// ---- Insert data into the playbooks table

for (const playbookFile of playbookFiles) {
  const data = getData<Omit<schema.SelectPlaybook, "id">[]>(
    playbookFile,
    "playbooks"
  )
  // console.log(data)
}

// ---- Insert data into the base_stats table (+ FKs)

// ---- Insert data into the moves table (+ FKs)

// ---- Insert data into the subclasses table (+ FKs)

// ---- Insert data into the characters table -- this one isn't needed unlses we want to add some test data...

process.exit(0)
