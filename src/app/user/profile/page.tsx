import { currentUser } from "@clerk/nextjs"

export default async function Page() {
  const user = await currentUser()
  if (!user) return null

  // TODO: Fetch user characters
  // 2. render character list
  // - If no characters show a fallback

  return (
    <div className="flex h-full">
      {/* TODO: Left Sidebar */}
      <div className="w-64 h-full p-4 break-words bg-neutral-700">
        <div className="">
          <div>{user.username}</div>
          <div>{user.emailAddresses[0].emailAddress}</div>
        </div>
      </div>

      {/* TODO: Middle Character Content */}
      <div className="flex-grow h-full p-4 bg-slate-600">
        <h1>Kano</h1>
        <h3>The Rogue</h3>
        <p>Some filler content</p>
      </div>

      {/* TODO: Right Sidebar (Character Overview/Details) - open/close */}
      <div className="h-full p-4 bg-sky-700 w-80">Right sidebar</div>
    </div>
  )
}
