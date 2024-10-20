import { NextRequest, NextResponse } from "next/server"

import { transformPlaybook } from "@/app/api/helpers"
import { fetchPlaybookByParam, fetchPlaybooks } from "@/app/api/service"

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
      const playbooks = await fetchPlaybooks()
      if (!playbooks) throw new Error("No playbooks found")

      const transformedData = playbooks.map(transformPlaybook)
      return NextResponse.json(transformedData)
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json({ error: e.message }, { status: 404 })
    }
  }
}
