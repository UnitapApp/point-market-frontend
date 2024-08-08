import { cookieStorage, createConfig, createStorage, http } from "wagmi"
import { supportedChains } from "@/constants/chains"
import { injected, mock, safe, walletConnect } from "wagmi/connectors"
import { HttpTransport } from "viem"

// export const wagmiPublicProvider = publicProvider();

// export const wagmiJsonRpcProvider = jsonRpcProvider({
//   rpc: (chain: Chain) => ({
//     http: RPC_URLS[chain.id as SupportedChainId],
//     webSocket: RPC_URLS_WEBSOCKET[chain.id as SupportedChainId],
//   }),
// });

const getConnectorProviders = () => {
  return [
    injected(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
    }),
    safe(),
  ]
}

const transports: { [key: string]: HttpTransport } = {}

for (const chain of supportedChains) {
  transports[chain.id] = http()
}

export const config = createConfig({
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  chains: supportedChains as any,
  connectors: getConnectorProviders(),
  transports,
})
