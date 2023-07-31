import MainNav from "../main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

function SiteHeader() {
  return (
    <header className="sticky top-0 px-4 border-b">
      <div className="container flex items-center h-20">
        {/* TODO: Should take a list of items as a prop for navigation */}
        <MainNav />
        <div className="flex items-center justify-end flex-1 ">
          <nav className="flex items-center gap-4">
            {/* Signed In */}
            {/* Dropdown (onClick)
            1. Full Name
            2. Avatar
            3. Username 
            4. Manage Account
            5. Sign Out 
            */}
            <Avatar>
              <AvatarImage src="https://github.com/fluroash.png" />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
            {/* Not Signed In */}
            <Button variant="outline">Sign In</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
