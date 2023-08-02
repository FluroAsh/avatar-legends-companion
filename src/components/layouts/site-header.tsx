import MainNav from "../main-nav"
import { Button } from "../ui/button"
import UserNav from "../user-nav"

function SiteHeader() {
  return (
    <header className="sticky top-0 py-2 border-b shadow-sm backdrop-blur bg-slate-700/80">
      <div className="container flex items-center h-16">
        {/* TODO: Should take a list of items as a prop for navigation */}
        <MainNav />
        <div className="flex items-center justify-end flex-1 ">
          <nav className="flex items-center gap-4">
            <UserNav />
            {/* Not Signed In */}
            <Button variant="outline">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
