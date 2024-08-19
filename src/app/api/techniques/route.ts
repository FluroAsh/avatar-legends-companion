import { eq, sql } from "drizzle-orm"
import { NextRequest, NextResponse } from "next/server"

import { db } from "@/db"
import { techniques } from "@/db/schema"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const typeParam = searchParams.get("base")

  try {
    if (typeParam) {
      console.log("typeParam")
      const techniqueData = await db
        .select()
        .from(techniques)
        .where(eq(sql`lower(${techniques.base})`, sql`lower(${typeParam})`))

      if (techniqueData.length === 0) throw new Error("Technique not found")

      return NextResponse.json(techniqueData)
    }

    if (!typeParam) {
      const techniquesData = await db.select().from(techniques)
      return NextResponse.json(techniquesData)
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 500 })
    }
  }
}
