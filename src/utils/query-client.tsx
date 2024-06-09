"use client"

import { useState } from "react"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental"

import { DEFAULT_PLAYBOOK } from "@/lib/constants"
import { fetchPlaybook, fetchTechniques } from "@/lib/helpers"

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

const usePlaybook = (
  playbook: string | undefined,
  options: { suspense?: boolean } = { suspense: true }
) => {
  const { suspense } = options

  const queryConfig = {
    queryKey: ["playbook", playbook || DEFAULT_PLAYBOOK],
    queryFn: () => fetchPlaybook(playbook),
  }

  const queryHook = suspense ? useSuspenseQuery : useQuery
  return queryHook(queryConfig)
}

const useTechniques = (
  options: { suspense?: boolean; type?: string } = { suspense: true }
) => {
  const { suspense, type } = options

  const queryConfig = {
    queryKey: ["techniques", type || "all"],
    queryFn: () => fetchTechniques(type),
  }

  const queryHook = suspense ? useSuspenseQuery : useQuery
  return queryHook(queryConfig)
}

export { ReactQueryClientProvider, usePlaybook, useTechniques }
