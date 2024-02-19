"use client"

import { createContext, useContext, useState } from "react"

const CONTEXT_STATE = {
  formState: {
    playbook: {
      value: "",
      error: "",
    },
    characterName: {
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
    // TODO: Add more form fields...
  },
  setFormState: () => {},
}

export type ContextState = {
  formState: {
    // eslint-disable-next-line no-unused-vars
    [K in keyof (typeof CONTEXT_STATE)["formState"]]: {
      value: string
      error: string
    }
  }
  setFormState: React.Dispatch<React.SetStateAction<any>>
}

const FormContext = createContext<ContextState>(CONTEXT_STATE)

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formState, setFormState] = useState(CONTEXT_STATE.formState)
  console.log("%c [FormContext] － state:", "color: #aabbee", {
    ...formState,
  })

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  )
}

// TODO: Add a reducer to handle form state

function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider")
  }
  return context
}

export { FormProvider, useFormContext }
