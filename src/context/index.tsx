import { FC, PropsWithChildren } from "react"
import { GlobalContextProvider } from "./globalProvider"
import WalletProvider from "./walletProvider"

export const UnitapProvider: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <GlobalContextProvider>
      <WalletProvider>{children}</WalletProvider>
    </GlobalContextProvider>
  )
}

export default UnitapProvider
