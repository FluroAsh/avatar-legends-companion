"use client"

import { createContext, useContext, useState } from "react"

interface ContextState {
  state: any
  setState: React.Dispatch<React.SetStateAction<any>> // Adjust the type accordingly
}

const INITIAL_STATE = {
  state: {},
  setState: () => {},
}

const PlaybookContext = createContext<ContextState>(INITIAL_STATE)

const PlaybookProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(INITIAL_STATE.state)
  console.log("%c [PlaybookContext] － state:", "color: #bada55", { ...state })

  return (
    <PlaybookContext.Provider value={{ state, setState }}>
      {children}
    </PlaybookContext.Provider>
  )
}

function usePlaybookContext() {
  const context = useContext(PlaybookContext)
  if (!context) {
    throw new Error("usePlaybookContext must be used within a PlaybookProvider")
  }
  return context
}

export { PlaybookProvider, usePlaybookContext }
