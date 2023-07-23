import { readdirSync, readFileSync } from "fs"
import { NextResponse } from "next/server"
import { CLASS_DATA_PATHNAME } from "@/paths"

export async function GET() {
  const files = readdirSync(CLASS_DATA_PATHNAME)

  if (files.length < 1) return NextResponse.error()

  const classesData = files.reduce((acc: any[], fileName) => {
    const data = readFileSync(`${CLASS_DATA_PATHNAME}/${fileName}`, "utf8")
    const classData = JSON.parse(data)
    return [...acc, classData]
  }, [])

  return NextResponse.json({ data: classesData })
}
