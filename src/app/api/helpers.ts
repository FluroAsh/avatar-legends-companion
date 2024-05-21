import { existsSync, readFileSync } from "fs"

import { API_ERRORS, PlaybookError } from "@/app/api/errors"

export const readJSONFile = (filePath: string) => {
  let classData
  if (existsSync(filePath)) {
    const data = readFileSync(filePath, "utf8")
    classData = JSON.parse(data)
  } else {
    throw new PlaybookError(API_ERRORS.class.notFound)
  }

  return classData
}

export const readJSONFiles = (fileNames: string[], pathname: string) => {
  if (fileNames.length < 1) throw new PlaybookError(API_ERRORS.classes.notFound)

  return fileNames.reduce((acc: string[], fileName) => {
    const filePath = `${pathname}/${fileName}`

    if (!existsSync(filePath))
      throw new PlaybookError(API_ERRORS.generic.badRequest)

    const data = readFileSync(filePath, "utf8")
    const classData = JSON.parse(data)
    return [...acc, classData]
  }, [])
}
