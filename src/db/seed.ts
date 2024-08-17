import { db } from "@/db"
import { techniques, type Technique } from "@/db/schema/techniques"
import { sql } from "drizzle-orm"
import * as fs from "fs"

import * as schema from "@/db/schema"

const files = fs.readdirSync("./public/data/techniques")

console.log("Seeding techniques...")
files.forEach((file) => console.log(`- ${file}`))

// Crurently no native inbuilt drizzle method to truncate tables
const truncateTables = async (tables: string[]) =>
  await db.execute(
    sql.raw(`TRUNCATE TABLE ${tables.join(", ")} RESTART IDENTITY CASCADE;`)
  )

const seedDatabase = async () => {
  try {
    // TODO: A way to get all the table names from our index schema?
    await truncateTables([
      "techniques",
      "playbooks",
      "base_stats",
      "moves",
      "playbook_base_stats",
      "playbook_moves",
      "playbook_techniques",
    ])

    // Insert data into the techniques table
    for (const file of files) {
      const data = getTechniqueData(file)
      console.log(`> Inserting ${data.length} techniques from "${file}"`)

      await db.insert(techniques).values(data)
      console.log("✅ Techniques inserted successfully")
    }
    // TODO: Set up other tables...
    // Insert data into the playbooks table

    // Insert data into the base_stats table (+ FKs)

    // Insert data into the moves table (+ FKs)

    // Insert data into the subclasses table (+ FKs)

    // Insert data into the characters table
  } catch (e) {
    console.error("🚨 Error seeding database", e)
  } finally {
    process.exit()
  }
}

seedDatabase()

function getTechniqueData(file: string): Omit<Technique, "id">[] {
  const data = fs.readFileSync(`./public/data/techniques/${file}`, "utf-8")
  return JSON.parse(data)
}
