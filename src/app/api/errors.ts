type PlaybookErrorProps = {
  statusCode: number
  message: string
}

export class PlaybookError extends Error {
  statusCode: number

  constructor({ message, statusCode }: PlaybookErrorProps) {
    super(message)
    this.name = "PlaybookError"
    this.statusCode = statusCode
  }
}

export const API_ERRORS = {
  class: {
    notFound: {
      statusCode: 404,
      message: "This class does not exist",
    },
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
