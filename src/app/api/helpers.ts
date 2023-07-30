import { existsSync, readFileSync } from "fs"
import { ApiError } from "next/dist/server/api-utils"
import { API_ERRORS } from "@/app/api/errors"
import { CLASS_DATA_PATHNAME } from "@/paths"

export const getClassData = (filePath: string) => {
  let classData
  if (existsSync(filePath)) {
    const data = readFileSync(filePath, "utf8")
    classData = JSON.parse(data)
  } else {
    throw new ApiError(404, API_ERRORS.class.notFound)
  }
  return classData
}

export const getClassesData = (filePaths: string[]) => {
  if (filePaths.length < 1) throw new ApiError(400, API_ERRORS.badRequest)

  return filePaths.reduce((acc: string[], fileName) => {
    const filePath = `${CLASS_DATA_PATHNAME}/${fileName}`
    if (!existsSync(filePath))
      throw new ApiError(404, API_ERRORS.class.notFound)

    const data = readFileSync(filePath, "utf8")
    const classData = JSON.parse(data)
    return [...acc, classData]
  }, [])
}
