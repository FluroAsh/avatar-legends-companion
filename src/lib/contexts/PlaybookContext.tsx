"use client"

import { createContext, useContext, useState } from "react"

type PlaybookContextState = {
  playbookData: Record<string, any>
  setPlaybookData: React.Dispatch<React.SetStateAction<any>> // Adjust the type accordingly
}

const CONTEXT_STATE = {
  playbookData: {},
  setPlaybookData: () => {},
}

const PlaybookContext = createContext<PlaybookContextState>(CONTEXT_STATE)

const PlaybookProvider = ({ children }: { children: React.ReactNode }) => {
  const [playbookData, setPlaybookData] = useState(CONTEXT_STATE.playbookData)
  console.log("%c [PlaybookContext] － state:", "color: #bada55", {
    ...playbookData,
  })

  return (
    <PlaybookContext.Provider value={{ playbookData, setPlaybookData }}>
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
