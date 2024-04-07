// needs to be absolute paths for server-side
export const CLASS_DATA_PATHNAME = "public/data/class-data"

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
