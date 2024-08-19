import { eq, sql } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

import { db } from "@/db"
import { playbooks } from "@/db/schema"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const playbookParam = searchParams.get("playbook")

  try {
    if (playbookParam) {
      const data = await db
        .select()
        .from(playbooks)
        .where(
          eq(
            sql`lower(regexp_replace(${playbooks.playbook}, '^The\\s', ''))`,
            sql`lower(${playbookParam})`
          )
        )

      if (!data) throw new Error("Playbook not found")
      return NextResponse.json(data)
    }

    if (!playbookParam) {
      const data = await db.select().from(playbooks)
      return NextResponse.json(data)
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 })
    }
  }
}
