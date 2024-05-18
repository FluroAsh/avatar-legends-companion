import { readdirSync } from "fs"
import { NextRequest, NextResponse } from "next/server"

import { getPlaybookData, getPlaybooksData } from "@/app/api/helpers"
import { PLAYBOOK_DATA_PATHNAME } from "@/lib/paths"

import { PlaybookError } from "../errors"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  try {
    const typeParam = searchParams.get("type")

    if (typeParam) {
      const filePath = `${PLAYBOOK_DATA_PATHNAME}/${typeParam}.json`
      const playbookData = getPlaybookData(filePath)
      return NextResponse.json(playbookData)
    }

    if (!typeParam) {
      const filePaths = readdirSync(PLAYBOOK_DATA_PATHNAME)
      const playbooksData = getPlaybooksData(filePaths)
      return NextResponse.json(playbooksData)
    }
  } catch (e) {
    if (e instanceof PlaybookError) {
      return NextResponse.json({ message: e.message }, { status: e.statusCode })
    }
    return NextResponse.error()
  }
}
