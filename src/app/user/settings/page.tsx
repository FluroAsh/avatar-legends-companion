import { UserProfile } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex justify-center my-4">
      <UserProfile />
    </div>
  )
}
