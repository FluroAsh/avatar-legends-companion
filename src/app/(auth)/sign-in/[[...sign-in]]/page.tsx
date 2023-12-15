import { SignIn } from "@clerk/nextjs"

import { PATHNAME } from "@/lib/paths"

export default function Page() {
  return <SignIn redirectUrl={PATHNAME.USER.profile} />
}
