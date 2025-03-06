"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { ReactNode } from "react"
import { type State, WagmiProvider } from "wagmi"
import { NextUIProvider } from "@nextui-org/react"

import { config } from "@/utils/wallet/wagmi"

type Props = {
  children: ReactNode
  initialState?: State
}

const queryClient = new QueryClient()

export function Providers({ children, initialState }: Props) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NextUIProvider>
    </WagmiProvider>
  )
}
