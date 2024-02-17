"use client"

import { createContext, useContext } from "react"

const INITIAL_STATE = {
  archetype: {
    value: "",
    error: "",
  },
  name: {
    value: "",
    error: "",
  },
  background: {
    value: "",
    error: "",
  },
  demeanour: {
    value: "",
    error: "",
  },
}

const FormContext = createContext(INITIAL_STATE)
const FormProvider = ({ children }: { children: React.ReactNode }) => (
  <FormContext.Provider value={INITIAL_STATE}>{children}</FormContext.Provider>
)

// TODO: Add a reducer to handle form state

function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

export { FormProvider, useFormContext }
