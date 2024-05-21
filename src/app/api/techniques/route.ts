import * as fs from "fs"
import { NextRequest, NextResponse } from "next/server"

import { readJSONFile, readJSONFiles } from "@/app/api/helpers"
import { resolveDataPathname } from "@/lib/paths"

import { PlaybookError } from "../errors"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  try {
    const typeParam = searchParams.get("type")
    const targetDir = resolveDataPathname("techniques")

    if (typeParam) {
      const filePath = `${targetDir}/${typeParam}.json`
      const playbookData = readJSONFile(filePath)
      return NextResponse.json(playbookData)
    }

    if (!typeParam) {
      const fileNames = fs.readdirSync(targetDir)
      const playbooksData = readJSONFiles(fileNames, targetDir)
      return NextResponse.json(playbooksData)
    }
  } catch (e) {
    if (e instanceof PlaybookError) {
      return NextResponse.json({ message: e.message }, { status: e.statusCode })
    }
    return NextResponse.error()
  }
}
