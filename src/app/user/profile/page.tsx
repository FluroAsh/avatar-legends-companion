export default function Page() {
  return (
    <div className="flex flex-1">
      {/* TODO: Left Sidebar */}
      <div className="w-64 h-full bg-neutral-700">Left sidebar</div>

      {/* TODO: Middle Character Content */}
      <div className="flex-grow h-full bg-slate-600">
        <h1>Kano</h1>
        <h3>The Rogue</h3>
        <p>Some filler content</p>
      </div>

      {/* TODO: Right Sidebar (Character Overview/Details) - open/close */}
      <div className="h-full bg-sky-700 w-80">Right sidebar</div>
    </div>
  )
}
