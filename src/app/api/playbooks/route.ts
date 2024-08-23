import { NextRequest, NextResponse } from "next/server"

import { db } from "@/db"
import { transformPlaybook } from "@/api/helpers"
import { fetchPlaybookByParam } from "@/api/service"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const playbookParam = searchParams.get("playbook")

  try {
    if (playbookParam) {
      const [playbook] = await fetchPlaybookByParam(playbookParam)
      if (!playbook) throw new Error("Playbook not found")

      const transformedData = transformPlaybook(playbook)
      return NextResponse.json(transformedData)
    }

    if (!playbookParam) {
      const playbooks = await db.query.playbooks.findMany()
      if (!playbooks) throw new Error("No playbooks found")
      return NextResponse.json(playbooks)
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 404 })
    }
  }
}
