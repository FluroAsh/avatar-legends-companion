import path from "path"

// Thanks to this article for the idea of using path.resolve, so that the Serverless Function behaves itself... 🤯
// https://medium.com/@boris.poehland.business/next-js-api-routes-how-to-read-files-from-directory-compatible-with-vercel-5fb5837694b9
export const resolveDataPathname = (dirName: string) =>
  path.resolve("./public", `data/${dirName}`)

// URL Paths
export const PATHNAME = {
  PUBLIC: {
    index: "/",
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
  USER: {
    createCharacter: "/user/create-character",
    profile: "/user/profile",
    settings: "/user/settings",
  },
} as const
