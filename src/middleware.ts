import { authMiddleware } from "@clerk/nextjs/server"

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  // `/api` routes should remain public so we can pre-fetch data without authentication
  publicRoutes: ["/", "/sign-in(.*)", "/sign-up(.*)", "/api(.*)"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(v1/users)(.*)"],
}
