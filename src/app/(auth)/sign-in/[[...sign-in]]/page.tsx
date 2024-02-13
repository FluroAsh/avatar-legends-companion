import { SignIn } from "@clerk/nextjs"

import { PATHNAME } from "@/lib/paths"

export default function Page() {
  // TODO: Make this page a little... sexier...
  return <SignIn redirectUrl={PATHNAME.USER.profile} />
}
