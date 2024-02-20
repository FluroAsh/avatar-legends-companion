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
      values: [] as string[],
      error: "",
    },
    demeanour: {
      values: [] as string[],
      error: "",
    },
    // TODO: Add more form fields...
  },
  setFormState: () => {},
}

type FormContextState = {
  formState: {
    [K in keyof (typeof CONTEXT_STATE)["formState"]]: K extends
      | "background"
      | "demeanour"
      ? {
          values: string[]
          error: string
        }
      : {
          value: string
          error: string
        }
  }
  setFormState: React.Dispatch<
    React.SetStateAction<(typeof CONTEXT_STATE)["formState"]>
  >
}

const FormContext = createContext<FormContextState>(CONTEXT_STATE)

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
