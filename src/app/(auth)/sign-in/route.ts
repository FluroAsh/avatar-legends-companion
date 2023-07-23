import { NextResponse } from "next/server"

export async function GET() {
  console.log("Hit sign in API endpoint")
  return NextResponse.redirect("/auth/sign-in")
}
