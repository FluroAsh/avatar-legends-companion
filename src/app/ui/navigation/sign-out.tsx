"use client"

import { useClerk } from "@clerk/nextjs"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SignOut({ children }: { children: React.ReactNode }) {
  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <Link href="/" onClick={handleSignOut}>
      {children}
    </Link>
  )
}
