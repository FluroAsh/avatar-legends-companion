import SiteHeader from "@/components/layouts/site-header"

import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="relative flex flex-col min-h-screen antialiased">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            {/* Footer */}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
