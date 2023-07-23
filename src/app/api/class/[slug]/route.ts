import { existsSync, readFileSync } from "fs"
import { NextResponse } from "next/server"
import { sanitizeSlug } from "@/utils"

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  const sanitizedSlug = sanitizeSlug(slug)

  const filePath = `src/data/class-data/${sanitizedSlug}.json`
  if (existsSync(filePath)) {
    const data = readFileSync(filePath, "utf8")
    const classData = JSON.parse(data)
    return NextResponse.json({ data: classData })
  } else {
    return NextResponse.json({
      status: 404,
      statusText: "This class does not exist",
    })
  }
}
