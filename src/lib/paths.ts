import path from "path"

export const CLASS_DATA_PATHNAME = path.resolve("./public", "data/class-data")

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
