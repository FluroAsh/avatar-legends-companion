import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs"

import { NAV_LINKS } from "@/lib/site-config"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

function UserNav() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-12 h-12 rounded-full">
            <Avatar className="w-12 h-12 border">
              <AvatarImage src="https://github.com/fluroash.png" />
              <AvatarFallback>AT</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">fluroash</p>
              <p className="text-xs leading-none text-muted-foreground">
                at@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {NAV_LINKS.map(({ title, href }, idx) => (
              <DropdownMenuItem
                key={`${title.toLowerCase()}-${idx}`}
                className="cursor-pointer"
                asChild
              >
                <Link href={href}>{title}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full cursor-pointer" asChild>
            <SignOutButton>Sign Out</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default UserNav
