import Link from "next/link"
import { currentUser, SignOutButton } from "@clerk/nextjs"

import { NAV_LINKS } from "@/lib/site-config"
import { getInitials } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { Button } from "../button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu"

export default async function UserNav() {
  const user = await currentUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-12 h-12 rounded-full">
          <Avatar className="w-12 h-12 border">
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
              {getInitials(user?.firstName, user?.lastName)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
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
  )
}
