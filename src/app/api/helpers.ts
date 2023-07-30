import { existsSync, readFileSync } from "fs"

import { API_ERRORS, ClassError } from "@/app/api/errors"
import { CLASS_DATA_PATHNAME } from "@/paths"

export const getClassData = (filePath: string) => {
  let classData
  if (existsSync(filePath)) {
    const data = readFileSync(filePath, "utf8")
    classData = JSON.parse(data)
  } else {
    throw new ClassError({ ...API_ERRORS.class.notFound })
  }
  return classData
}

export const getClassesData = (filePaths: string[]) => {
  if (filePaths.length < 1)
    throw new ClassError({ ...API_ERRORS.classes.notFound })

  return filePaths.reduce((acc: string[], fileName) => {
    const filePath = `${CLASS_DATA_PATHNAME}/${fileName}`
    if (!existsSync(filePath))
      throw new ClassError({ ...API_ERRORS.generic.badRequest })

    const data = readFileSync(filePath, "utf8")
    const classData = JSON.parse(data)
    return [...acc, classData]
  }, [])
}
