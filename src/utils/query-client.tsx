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
import { fetchPlaybook } from "@/lib/helpers"

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
  useQuery({
    queryKey: ["playbook", playbook || DEFAULT_PLAYBOOK],
    queryFn: () => fetchPlaybook(playbook),
  })

const useSuspensePlaybook = (playbook: string | undefined) =>
  useSuspenseQuery({
    queryKey: ["playbook", playbook || DEFAULT_PLAYBOOK],
    queryFn: () => fetchPlaybook(playbook),
  })

export { ReactQueryClientProvider, usePlaybook, useSuspensePlaybook }
