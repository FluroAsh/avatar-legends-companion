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

import { fetchPlaybook } from "./utils"

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const usePlaybook = (playbook: string) =>
  useQuery({
    queryKey: [playbook || "bold"],
    queryFn: () => fetchPlaybook(playbook),
  })

const useSuspensePlaybook = (playbook: string) =>
  useSuspenseQuery({
    queryKey: [playbook || "bold"],
    queryFn: () => fetchPlaybook(playbook),
  })

export { ReactQueryClientProvider, usePlaybook, useSuspensePlaybook }
