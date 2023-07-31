import SiteHeader from "@/components/layouts/site-header"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {/* Footer */}
    </div>
  )
}
