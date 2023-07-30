import { readdirSync } from "fs"
import { NextRequest, NextResponse } from "next/server"

import { getClassData, getClassesData } from "@/app/api/helpers"
import { CLASS_DATA_PATHNAME } from "@/lib/paths"

import { ClassError } from "../errors"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const typeParam = searchParams.get("type")

    if (typeParam) {
      const filePath = `${CLASS_DATA_PATHNAME}/${typeParam}.json`
      const classData = getClassData(filePath)
      return NextResponse.json({ data: classData })
    }

    if (!typeParam) {
      const filePaths = readdirSync(CLASS_DATA_PATHNAME)
      const classesData = getClassesData(filePaths)
      return NextResponse.json({ data: classesData })
    }
  } catch (e) {
    if (e instanceof ClassError) {
      return NextResponse.json({ message: e.message }, { status: e.statusCode })
    }
    return NextResponse.error()
  }
}
