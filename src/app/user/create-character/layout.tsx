export default function CreateCharacterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative w-full max-w-screen-lg p-5 mx-auto">
      {children}
    </div>
  )
}
