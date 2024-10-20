"use client"

import { useState } from "react"
import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQuery,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

import { DEFAULT_PLAYBOOK } from "@/lib/constants"
import { fetchPlaybook, fetchTechniques } from "@/lib/helpers"
import { Playbook, Technique } from "@/types/api"

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: Infinity } },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const usePlaybook = (playbook: string | undefined) =>
  // TODO: Add generic API Response type for playbook data
  useSuspenseQuery<Playbook>({
    queryKey: ["playbook", playbook || DEFAULT_PLAYBOOK],
    queryFn: () => fetchPlaybook(playbook),
  })

const useTechniques = (options: { type?: string } = {}) => {
  const { type } = options

  const queryConfig = {
    queryKey: ["techniques", type || "all"],
    queryFn: () => fetchTechniques(type),
  }

  return useSuspenseQuery<Technique[]>(queryConfig)
}

export { ReactQueryClientProvider, usePlaybook, useTechniques }
