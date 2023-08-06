import { UserProfile } from "@clerk/nextjs"

export default function Profile() {
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
