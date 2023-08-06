import { UserProfile } from "@clerk/nextjs"

export default function Page() {
  return (
    <UserProfile
      appearance={{
        elements: {
          card: {
            "z-index": 1,
          },
        },
      }}
    />
  )
}
