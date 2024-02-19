"use client"

import { createContext, useContext, useState } from "react"

type ContextState = {
  playbook: any
  setPlaybook: React.Dispatch<React.SetStateAction<any>> // Adjust the type accordingly
}

const CONTEXT_STATE = {
  playbook: {},
  setPlaybook: () => {},
}

const PlaybookContext = createContext<ContextState>(CONTEXT_STATE)

const PlaybookProvider = ({ children }: { children: React.ReactNode }) => {
  const [playbook, setPlaybook] = useState(CONTEXT_STATE.playbook)
  console.log("%c [PlaybookContext] － state:", "color: #bada55", {
    ...playbook,
  })

  return (
    <PlaybookContext.Provider value={{ playbook, setPlaybook }}>
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
