type ApiErrors = {
  [entity: string]: {
    [errorType: string]: { statusCode: number; message: string }
  }
}

export const API_ERRORS: ApiErrors = {
  class: {
    notFound: { statusCode: 404, message: "This class does not exist" },
  },
  classes: {
    notFound: { statusCode: 404, message: "No classes found" },
  },
  generic: {
    badRequest: {
      statusCode: 400,
      message: "Something went wrong, please try again later",
    },
  },
} as const
