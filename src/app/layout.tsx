import SiteHeader from "@/app/ui/navigation/site-header"

import "@/ui/globals.css"

import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { ReactQueryClientProvider } from "@/utils/query-client"

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
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <ClerkProvider
            appearance={{
              variables: {
                colorPrimary: "#313f51",
              },
            }}
          >
            <div className="relative flex flex-col min-h-screen antialiased">
              <SiteHeader />
              <main className="flex flex-1">{children}</main>
              {/* Footer */}
            </div>
          </ClerkProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
