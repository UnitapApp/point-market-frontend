import { ClaimReceipt, Faucet, FuelChampion } from "@/types"
import { convertFaucetToChain } from "../api"

export const getFaucetListServer = async () => {
  return [
    convertFaucetToChain({
      pk: 15,
      chain: {
        pk: 15,
        chainName: "Optimism",
        chainId: "10",
        nativeCurrencyName: "ETH",
        symbol: "ETH",
        decimals: 18,
        explorerUrl: "https://optimistic.etherscan.io/",
        rpcUrl: "https://mainnet.optimism.io",
        logoUrl:
          "https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/cef210ce-85ba-4482-f3bb-bbc5f6ecb200/public",
        modalUrl:
          "https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/cef210ce-85ba-4482-f3bb-bbc5f6ecb200/public",
        isTestnet: false,
        chainType: "EVM",
      },
      fundManagerAddress: "0xb3A97684Eb67182BAa7994b226e6315196D8b364",
      gasImageUrl:
        "https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/cef210ce-85ba-4482-f3bb-bbc5f6ecb200/public",
      maxClaimAmount: 50000000000000,
      totalClaims: 23,
      totalClaimsThisRound: 1,
      tokentapContractAddress: "0x54a839FF128DC1891a03d7a81724bD5D51A5902b",
      needsFunding: false,
      blockScanAddress:
        "https://optimistic.etherscan.io/address/0xb3A97684Eb67182BAa7994b226e6315196D8b364",
      isOneTimeClaim: false,
      currentFuelLevel: 10,
      isDeprecated: false,
      remainingClaimNumber: 155,
    }),
  ]
}

export const getClaimedReceiptsServer = async (token?: string) => {
  if (!token) return []

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/gastap/user/claims/",
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${token}`,
      },
    }
  ).then((res) => res.json())

  if (!Array.isArray(res)) return []

  return res.map((item) => ({
    ...item,
    chain: convertFaucetToChain((item as any).faucet),
  }))
}

export const getOneTimeClaimedReceiptsServer = async (token?: string) => {
  if (!token) return []

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/gastap/user/one-time-claims/",
    {
      cache: "no-store",
      headers: {
        Authorization: `token ${token}`,
      },
    }
  ).then((res) => res.json())

  if (!Array.isArray(res)) return []

  return res.map((item) => ({
    ...item,
    chain: convertFaucetToChain((item as any).faucet),
  })) as ClaimReceipt[]
}

export async function getFuelChampionListServerSide() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL! + "/api/gastap/fuel-champion",
    {
      cache: "no-store",
    }
  ).then((res) => res.json())

  return response as FuelChampion[]
}
