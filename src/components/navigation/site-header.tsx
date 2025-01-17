import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"

import { Button } from "@/components/button"
import { PATHNAME } from "@/lib/paths"

import MainNav from "./main-nav"
import UserNav from "./user-nav"

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 py-2 border-b shadow-sm backdrop-blur bg-slate-700/50">
      <div className="container flex items-center h-16">
        {/* TODO: Should take a list of items as a prop for navigation */}
        <MainNav />
        <div className="flex items-center justify-end flex-1 ">
          <nav className="flex items-center gap-4">
            <SignedIn>
              <UserNav />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal" redirectUrl={PATHNAME.USER.profile}>
                <Button variant="primary" className="h-8 text-sm">
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
