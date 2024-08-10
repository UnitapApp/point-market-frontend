"use client"
import { useGlobalContext } from "@/context/globalProvider"
import { useWalletAccount } from "@/utils/wallet"
import { useEffect } from "react"

const WalletManager = () => {
  const { setIsWalletPromptOpen } = useGlobalContext()
  const { address, isConnected } = useWalletAccount()

  useEffect(() => {
    if (isConnected) return

    setIsWalletPromptOpen(true)
  }, [address, isConnected])

  return null
}

export default WalletManager
