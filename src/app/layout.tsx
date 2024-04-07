import SiteHeader from "@/app/ui/navigation/site-header"

import "@/ui/globals.css"

import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { ReactQueryClientProvider } from "@/utils/query-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Avatar Legends Companion",
  description: "Create and manage your Avatar Legends characters",
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
              {/* TODO: Should not display the "SignInButton" on `/sign-up` page */}
              <SiteHeader />
              <main className="flex flex-1 ">
                {children}
                <div
                  role="presentation"
                  className="absolute inset-0 z-[-1] bg-segaiha opacity-30"
                />
              </main>
              {/* Footer */}
            </div>
          </ClerkProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
