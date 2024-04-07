import { readdirSync } from "fs"
import { NextRequest, NextResponse } from "next/server"

import { getPlaybookData, getPlaybooksData } from "@/app/api/helpers"
import { CLASS_DATA_PATHNAME } from "@/lib/paths"

import { PlaybookError } from "../errors"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const newHeaders = new Headers(req.headers)

  try {
    const typeParam = searchParams.get("type")
    console.log({ typeParam })

    if (typeParam) {
      const filePath = `${CLASS_DATA_PATHNAME}/${typeParam}.json`
      console.log(`${CLASS_DATA_PATHNAME}/${typeParam}.json`)
      const playbookData = getPlaybookData(filePath)
      return NextResponse.json({ data: playbookData }, { headers: newHeaders })
    }

    if (!typeParam) {
      const filePaths = readdirSync(CLASS_DATA_PATHNAME)
      const playbooksData = getPlaybooksData(filePaths)
      return NextResponse.json({ data: playbooksData }, { headers: newHeaders })
    }
  } catch (e) {
    if (e instanceof PlaybookError) {
      return NextResponse.json({ message: e.message }, { status: e.statusCode })
    }
    return NextResponse.error()
  }
}
